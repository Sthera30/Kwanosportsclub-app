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

            const res = await axios.get("http://localhost:5000/getAllValues")

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

            const res = await axios.get('http://localhost:5000/getAllAboutUs')

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

            const res = await axios.get('http://localhost:5000/getAllVision')

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

            const res = await axios.get('http://localhost:5000/getAllMission')

            if (res.data.success) {
                setMission(res.data.data.mission);

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

            const res = await axios.delete(`http://localhost:5000/removeValues?id=${id}`)

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

                <h1>ABOUT KWANO SPORTS CLUB</h1>

            </div>


            <div className='about-content'>

                {/*<p>{about[0]?.aboutDescription}</p> */}
                <p>The club was officially registered in 2024 with a view to make meaningful difference in the community of Kwanobuhle and surrounding areas through sport and education. The club aims to target tennis as a starting point and branch out to other well established sporting codes like athletics, football, cricket etc, We believe in holistic approach to raising a winning community, we're not only looking to equip the youth with physical training but mental, spiritual and financial education are all part of our agenda. This sporting initiative is looking to better the lives of children in our community and South Africa, as Nelson Mandela once said sport has the power to unite a nation.</p>


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

                    <h2><FaRocket style={{ color: 'orange', fontSize: '2rem' }} />&nbsp; Our Mission</h2>
                    <p>Building secure quality infrastructure that will be accessed by everyone in the communities</p>

                    {/*
                    
                     <h2><FaRocket style={{ color: 'orange', fontSize: '2rem' }} />&nbsp;{mission[0]?.missionTitle}</h2>
                    <p>{mission[0]?.missionDescription}</p>
                    */}

                    {user?.role === 'admin' ? (
                        <div className='button-container'>

                            <NavLink to={`/edit-mission/${mission[0]?._id}`} className='btnEdit'>Edit</NavLink>

                        </div>
                    ) : ("")}

                </div>

                <div className='our-mission-vision-box'>

                    <h2><FaEye className='eye' style={{ color: 'green' }} />&nbsp;Our Vision</h2>
                    <p>To turn Nelson Mandela Bay into capital of Sport in Eastern Cape. We see that talent is in abudance, we would like to help nurture it and see them become professional athletes or excelling in any other professional career representing South Africa at the highest level.</p>

                    {/*
                    
                     <h2><FaEye className='eye' style={{ color: 'green' }} />&nbsp;{id[0]?.visionTitle}</h2>
                    <p>{id[0]?.visionDescription}</p>

                    */}

                    {user?.role === 'admin' ? (

                        <div className='button-container'>

                            <NavLink to={`/edit-vision/${id[0]?._id}`} className='btnEdit'>Edit</NavLink>

                        </div>


                    ) : ("")}

                </div>

            </div>


            <div className='our-values-burner'>

                <div className='our-values-inner'>

                    <h2>OUR VALUES</h2>

                </div>

            </div>

            <div className='our-values-container'>

                <div className='our-values-box'>

                    <span>F</span>
                    <h3>Faith</h3>
                    <p>Loving and believing in the lord is the beginning of all wisdom</p>

                </div>

                <div className='our-values-box'>

                    <span>D</span>
                    <h3>Discipline</h3>
                    <p>Discipline is one of the centers that allows an individual to reach their full potential</p>

                </div>

                <div className='our-values-box'>

                    <span>U</span>
                    <h3>Unity</h3>
                    <p>We are all different with our own unique strengths and weaknesses but working together we can achieve much more</p>

                </div>

                <div className='our-values-box'>

                    <span>L</span>
                    <h3>Love</h3>
                    <p>Love is an action word and we hope our work will reflect just how much we love our community and South Africa as a whole</p>

                </div>

                <div className='our-values-box'>

                    <span>HW</span>
                    <h3>Hard Work</h3>
                    <p>Try to be the first to arrive and the last to leave. Work everyday and you will surely get the desired result. Our organization believes in the spirit of Ubuntu, together we work for the community and the improvement of the livelihoods of our people in Kwanobuhle and South Africa</p>

                </div>

            </div>

        </div>
    )
}

export default AboutUs
