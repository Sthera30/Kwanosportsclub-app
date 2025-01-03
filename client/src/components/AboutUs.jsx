import React, { useState } from 'react'
import { FaRocket, FaEye } from 'react-icons/fa'
import '../css/about.css'
import { useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/userContext'

function AboutUs() {



    const [id, setId] = useState("")
    const [mission, setMission] = useState("")
    const [about, setAbout] = useState("")
    const [values, setValues] = useState([])

    const { user } = useUserContext()


    async function handle_fetch_values() {

        try {

            const res = await axios.get("https://kwanosportsclub.co.za/getAllValues")

            if (res.data.success) {
                setValues(res.data.data.values)
            }


            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);

        }

    }



    async function handle_fetch_about() {

        try {

            const res = await axios.get('https://kwanosportsclub.co.za/getAllAboutUs')

            if (res.data.success) {
                setAbout(res.data.data.about)
            }

            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);
        }

    }


    async function handle_fetch_vision() {

        try {

            const res = await axios.get('https://kwanosportsclub.co.za/getAllVision')

            if (res.data.success) {
                setId(res.data.data.vision)
            }

            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);
        }

    }


    async function handle_fetch_mission() {

        try {

            const res = await axios.get('https://kwanosportsclub.co.za/getAllMission')

            if (res.data.success) {
                setMission(res.data.data.mision);

            }

            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);
        }

    }

    async function handle_remove_values(id) {

        try {

            const res = await axios.delete(`https://kwanosportsclub.co.za/removeValues?id=${id}`)

            if (res.data.success) {
                toast.success(res.data.message)
                handle_fetch_values()
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
        handle_fetch_about()
        handle_fetch_vision()
        handle_fetch_mission()
        handle_fetch_values()

    }, [])

    return (
        <div>

            <div className='about-container'>


                <h3>{about[0]?.aboutTitle}</h3>


            </div>


            <div className='about-content'>

                <p>{about[0]?.aboutDescription}</p>

                {user?.role === 'admin' ? (
                    <div className='button-container'>

                        <NavLink to={`/edit-about/${about[0]?._id}`} className='btnEdit'>Edit</NavLink>

                    </div>
                ) : ("")}

            </div>

            <div className='about-burner'>

                <div className='about-burner-inner'>

                    <h2>OUR MISSION & VISION</h2>

                </div>

            </div>

            <div className='our-mission-vision-container'>

                <div className='our-mission-vision-box'>

                    <h2><FaRocket style={{ color: 'orange', fontSize: '2rem' }} />&nbsp;{mission[0]?.missionTitle}</h2>
                    <p>{mission[0]?.missionDescription}</p>

                    {user?.role === 'admin' ? (
                        <div className='button-container'>

                            <NavLink to={`/edit-mission/${mission[0]?._id}`} className='btnEdit'>Edit</NavLink>

                        </div>
                    ) : ("")}

                </div>

                <div className='our-mission-vision-box'>

                    <h2><FaEye className='eye' style={{ color: 'green' }} />&nbsp;{id[0]?.visionTitle}</h2>
                    <p>{id[0]?.visionDescription}</p>

                    {user?.role === 'admin' ? (

                        <div className='button-container'>

                            <NavLink to={`/edit-vision/${id[0]?._id}`} className='btnEdit'>Edit</NavLink>

                        </div>


                    ) : ("")}

                </div>

            </div>


            <div className='our-values-burner'>

                <div className='our-values-inner'>

                    <h1>OUR VALUES</h1>

                </div>

            </div>

            <div className='our-values-container'>

                {values.map((value) => (

                    <div className='our-values-box'>

                        <span>{value.valuesIcon}</span>
                        <h3>{value.valuesTitle}</h3>
                        <p>{value.valuesDescription}</p>

                        {user?.role === 'admin' ? (
                            <div className='button-container'>

                                <NavLink to={`/edit-values/${value._id}`} className='btnEdit'>Edit</NavLink>
                                <button onClick={() => handle_remove_values(value._id)} className='btnDelete'>Delete</button>
                            </div>
                        ) : ("")}


                    </div>

                ))}

            </div>

        </div>
    )
}

export default AboutUs
