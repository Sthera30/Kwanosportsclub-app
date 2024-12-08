import React, { useEffect, useState } from 'react'
import '../css/editAboutUs.css'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from 'axios'

function EditAboutUs() {


    const [data, setData] = useState({ aboutTitle: '', aboutDescription: '' })

    const navigate = useNavigate()

    const { id } = useParams()



    async function handle_submit(e) {

        e.preventDefault()

        const { aboutTitle, aboutDescription } = data

        try {

            const res = await axios.put(`http://localhost:8081/updateAboutUs`, { id, aboutTitle, aboutDescription })

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


    async function handle_fetch_about_us_by_id(id) {

        try {

            const res = await axios.get(`http://localhost:8081/getAboutUsById?id=${id}`)

            if (res.data.success) {
                setData(res.data.data.about)
            }

            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {

        handle_fetch_about_us_by_id(id)
        window.scrollTo(0, 0)

    }, [id])


    return (
        <>
            <div className='update-about-container'>

                <div className='update-about-inner'>

                    <h2>Edit About Us</h2>

                    <form onSubmit={handle_submit}>

                        <label>About Us Title:</label>
                        <input type="text" placeholder='Enter about us title' value={data.aboutTitle} onChange={(e) => setData({ ...data, aboutTitle: e.target.value })} />
                        <label>About Us Description:</label>

                        <textarea name="" id="" rows={10} cols={10} value={data.aboutDescription} onChange={(e) => setData({ ...data, aboutDescription: e.target.value })}></textarea>

                        <button type='submit'>Update about us</button>

                    </form>


                </div>

            </div>


        </>
    )
}

export default EditAboutUs
