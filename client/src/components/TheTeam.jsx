import React, { useEffect, useState } from 'react'
import '../css/TheTeam.css'
import img1 from '../assets/IMG-20241120-WA0017.jpg'
import img2 from '../assets/IMG-20241119-WA0004.jpg'
import img3 from '../assets/Screenshot_20240928_152641_com.android.gallery3d.jpg'
import Img4 from '../assets/IMG-20241118-WA0058.jpg'
import img5 from '../assets/IMG-20241120-WA0017.jpg'
import img6 from '../assets/IMG-20241118-WA0059.jpg'
import img7 from '../assets/IMG-20241121-WA0015.jpg'
import axios from 'axios'
import toast from 'react-hot-toast'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/userContext'

function TheTeam() {

    const [team, setTeam] = useState([])
    const { user } = useUserContext()

    useEffect(() => {

        window.scrollTo(0, 0)

    }, [])


    async function handle_fetch_team() {

        try {

            const res = await axios.get(`http://localhost:8081/getAllTeam`)

            if (res.data.success) {
                setTeam(res.data.data.team)
            }
            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);
        }

    }

    async function handle_remove(id) {

        try {

            const res = await axios.delete(`http://localhost:8081/removeTeam?id=${id}`)

            if (res.data.success) {
                toast.success(res.data.message)
                handle_fetch_team()
            }

            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {

        handle_fetch_team()

    }, [])

    return (

        <>

            <div className='the-team-container'>

                <div className='the-team-inner'>

                </div>


            </div>

            <div className='meet-team'>

                <h1>MEET THE TEAM</h1>

                <div className='meet-team-container'>

                    {team.map((teams) => (

                        <>

                            <div className='img-box'>

                                <img src={teams.userTeamProfile} alt="" />

                                <div className='content'>

                                    <span>{teams.userTeamName}</span>
                                    <p>{teams.userTeamDescription}</p>

                                </div>

                                {user?.role === 'admin' ? (
                                    <div className='button-container'>

                                        <NavLink to={`/edit-team-member/${teams._id}`} className='btnEdit'>Edit</NavLink>
                                        <button onClick={() => handle_remove(teams._id)} className='btnDelete'>Delete</button>

                                    </div>
                                ) : ("")}

                            </div>



                        </>

                    ))}

                </div>

            </div>

            <div className='vlog-pics-container'>


                <div className='vlog-pics'>

                    <img src={Img4} alt="" />

                </div>

                <div className='vlog-pics'>

                    <img src={img5} alt="" />

                </div>

                <div className='vlog-pics'>

                    <img src={img6} alt="" />

                </div>


                <div className='vlog-pics'>

                    <img src={img7} alt="" />

                </div>


            </div>



        </>
    )
}

export default TheTeam
