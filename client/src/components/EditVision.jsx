import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import '../css/editVision.css'
import { useNavigate, useParams } from 'react-router-dom'

function EditVision() {

    const [data, setData] = useState({ visionTitle: '', visionDescription: '' })

    const navigate = useNavigate()

    const { id } = useParams()

    async function handle_fetch_vision_by_id(id) {

        try {

            const res = await axios.get(`https://kwanosportsclub.co.za/getVisionById?id=${id}`)

            if (res.data.success) {
                setData(res.data.data.vision)
            }

            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);
        }

    }

    async function handle_submit(e) {

        e.preventDefault()

        const { visionTitle, visionDescription } = data

        try {

            const res = await axios.put(`https://kwanosportsclub.co.za/updateVision`, { id, visionTitle, visionDescription })

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

    useEffect(() => {

        handle_fetch_vision_by_id(id)
        window.scrollTo(0, 0)

    }, [id])

    return (
        <div className='update-vision-container'>

            <div className='update-vision-inner'>

                <h2>Edit Our Vision</h2>

                <form onSubmit={handle_submit}>

                    <label>Vision Title:</label>
                    <input type="text" placeholder='Enter our vision title' value={data.visionTitle} onChange={(e) => setData({ ...data, visionTitle: e.target.value })} />
                    <label>Vision Description:</label>
                    <textarea name="" id="" rows={10} cols={10} value={data.visionDescription} onChange={(e) => setData({ ...data, visionDescription: e.target.value })} ></textarea>
                    <button type='submit'>Update vision</button>

                </form>


            </div>

        </div>
    )
}

export default EditVision
