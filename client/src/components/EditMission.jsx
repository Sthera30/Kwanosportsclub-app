import React, { useEffect, useState } from 'react'
import '../css/editMission.css'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from 'axios'

function EditMission() {

    const [data, setData] = useState({ missionTitle: '', missionDescription: '' })

    const navigate = useNavigate()

    const { id } = useParams()



    async function handle_submit(e) {

        e.preventDefault()

        const { missionTitle, missionDescription } = data

        try {

            const res = await axios.put(`http://localhost:8081/updateMission`, { id, missionTitle, missionDescription })

            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/')
            }
            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);

        }

    }


    async function handle_fetch_mission_by_id(id) {

        try {

            const res = await axios.get(`http://localhost:8081/getMissionById?id=${id}`)

            if (res.data.success) {
                setData(res.data.data.mission)
            }

            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {

        handle_fetch_mission_by_id(id)
        window.scrollTo(0, 0)

    }, [id])

    return (
        <div className='update-mission-container'>

            <div className='update-mission-inner'>

                <h2>Edit Our mission</h2>

                <form onSubmit={handle_submit}>

                    <label>Mission Title:</label>
                    <input type="text" placeholder='Enter our mission title' value={data.missionTitle} onChange={(e) => setData({ ...data, missionTitle: e.target.value })} />
                    <label>Mission Description:</label>
                    <textarea name="" id="" rows={10} cols={10} value={data.missionDescription} onChange={(e) => setData({ ...data, missionDescription: e.target.value })}></textarea>
                    <button type='submit'>Update mission</button>

                </form>


            </div>

        </div>
    )
}

export default EditMission
