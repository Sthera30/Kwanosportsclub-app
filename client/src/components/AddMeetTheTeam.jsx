import React, { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import '../css/meetTheTeam.css'

function AddMeetTheTeam() {


    const [data, setData] = useState({ userTeamProfile: '', userTeamName: '', userTeamDescription: '' })
    const [image, setImage] = useState({})
    const [upload, setUpload] = useState(false)


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

    async function handle_submit(e) {

        e.preventDefault()

        const {userTeamProfile, userTeamName, userTeamDescription} = data

        if(upload){
            toast.error('Please wait a few seconds for the image to fininish uploading.')
        }

        try {

            const res = await axios.post(`https://kwanosportsclub-backend-app.onrender.com/createTeam`, {userTeamProfile, userTeamName, userTeamDescription})

            if(res.data.success){
                toast.success(res.data.message)
                navigate('/meet-the-team')
            }

            else{
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);

        }

    }

    return (

        <div className='add-team-container'>

            <div className='add-team-inner'>

                <h2>Add Team Members</h2>

                <form onSubmit={handle_submit}>

                    <label id='upload'>Upload Image:</label>
                    <input type="file" id='upload' accept='image/*' onChange={handle_change} />
                    <label>Member Name:</label>
                    <input type="text" placeholder='Enter member name' onChange={(e) => setData({ ...data, userTeamName: e.target.value })} />
                    <label>Member Description:</label>
                    <input type="text" placeholder='Enter member description' onChange={(e) => setData({ ...data, userTeamDescription: e.target.value })} />

                    <button type='submit'>Add Team Member</button>

                </form>


            </div>

        </div>
    )
}

export default AddMeetTheTeam
