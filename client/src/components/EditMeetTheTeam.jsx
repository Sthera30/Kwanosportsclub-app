import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import '../css/editMeetTheTeam.css'

function EditMeetTheTeam() {

    const [data, setData] = useState({ userTeamProfile: '', userTeamName: '', userTeamDescription: '' })
    const [image, setImage] = useState({})
    const [upload, setUpload] = useState(false)

    const { id } = useParams()

    const navigate = useNavigate()


    async function handle_change(e) {

        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)

        setUpload(true) // upload is in progress

        try {

            const res = await axios.post(`https://kwanosportsclub-backend-app.onrender.com/upload`, formData)

            setImage({
                url: res.data.url,
                public_id: res.data.public_id
            })

            setUpload(false) // finished uploading

            setData(prevData => ({ ...prevData, userTeamProfile: res.data.url }))

        } catch (error) {
            console.log(error);

        }

    }


    async function handle_fetch_team_by_id(id) {

        try {

            const res = await axios.get(`https://kwanosportsclub-backend-app.onrender.com/getTeamById?id=${id}`)

            if(res.data.success){
                setData(res.data.data.team)
            }

            else{
                toast.error(res.data.error)
            }
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    async function handle_submit(e) {

        e.preventDefault()

        const { userTeamProfile, userTeamName, userTeamDescription } = data

        if (upload) {
            toast.error('Please wait a few seconds for the image to fininish uploading.')
        }

        try {

            const res = await axios.put(`https://kwanosportsclub-backend-app.onrender.com/updateTeam`, { id, userTeamProfile, userTeamName, userTeamDescription })

            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/meet-the-team')
            }

            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {

        window.scrollTo(0, 0)
        handle_fetch_team_by_id(id)

    }, [id])

    return (
        <div className='edit-team-container'>

            <div className='edit-team-inner'>

                <h2>Edit Team Members</h2>

                <form onSubmit={handle_submit}>

                    <label id='upload'>Upload Image:</label>
                    <input type="file" id='upload' accept='image/*' onChange={handle_change} />
                    <label>Member Name:</label>
                    <input type="text" placeholder='Enter member name' value={data.userTeamName} onChange={(e) => setData({ ...data, userTeamName: e.target.value })} />
                    <label>Member Description:</label>
                    <input type="text" placeholder='Enter member description' value={data.userTeamDescription} onChange={(e) => setData({ ...data, userTeamDescription: e.target.value })} />

                    <button type='submit'>Update Team Member</button>

                </form>


            </div>

        </div>
    )
}

export default EditMeetTheTeam
