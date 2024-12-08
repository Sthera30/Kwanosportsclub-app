import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { GiTennisRacket } from 'react-icons/gi'
import '../css/navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { useUserContext } from '../context/userContext.jsx'
import axios from 'axios'
import toast from 'react-hot-toast'


function Navbar() {


    const [isClicked, setIsClicked] = useState(false)

    const [isChevClicked, setIsChevClicked] = useState(false)
    const [isEquipClicked, setIsEquipClicked] = useState(false)

    const [isClickedManage, setIsClickedManage] = useState(false)
    const naviage = useNavigate()

    const { user, setUser } = useUserContext()


    useEffect(() => {
        const handleScroll = () => {
            if (isChevClicked) {
                setIsChevClicked(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isChevClicked]);



    useEffect(() => {
        const handleScroll = () => {
            if (isEquipClicked) {
                setIsEquipClicked(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isEquipClicked]);




    useEffect(() => {
        const handleScroll = () => {
            if (isClickedManage) {
                setIsClickedManage(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isClickedManage]);



    async function handle_logout(e) {

        e.preventDefault()

        try {

            const res = await axios.post('https://fullstack-kwanosportsclub-app-backendd.onrender.com/logout', {}, { withCredentials: true })

            if (res.data.success) {
                toast.success(res.data.message)
                setUser(null)
                naviage('/login', { replace: true })
            }

            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);
        }

    }


    return (

        <>

            <div className='header'>

                <div className='Tennis-icon-container'>

                    <div className='left-container'>

                        <NavLink to={"/"}>

                            <GiTennisRacket style={{ color: '#fff', cursor: 'pointer', fontSize: '3.4rem' }} />

                        </NavLink>

                    </div>

                    <div className='glitch-container'>

                        <span className='glitch-text' data-text="KWANO SPORTS CLUB">KWANO SPORTS CLUB</span>

                    </div>


                </div>

                <div className={`nav ${isClicked ? ("show") : ("hide")}`}>

                    <NavLink to={"/"} >HOME</NavLink>
                    <NavLink to={"/about-us"} className="about">ABOUT US

                    </NavLink>

                    <ChevronDown className='chevronDown' onClick={() => setIsChevClicked(prev => !prev)} style={{ color: '#fff', cursor: 'pointer' }} />

                    <NavLink to={"/projects"} >PROJECTS</NavLink>

                    <ChevronDown className='chevronDown2' onClick={() => setIsEquipClicked(prev => !prev)} style={{ color: '#fff', cursor: 'pointer' }} />

                    <NavLink to={"/community-building"} >COMMUNITY BUILDING</NavLink>
                    <NavLink to={"/get-involved"} >GET INVOLVED</NavLink>
                    <NavLink to={"/documents"} >DOCUMENTS</NavLink>
                    <NavLink to={"/contact-us"} >CONTACT</NavLink>

                    <div className={`meet-the-team-container ${isChevClicked ? ("showTeam") : ("hideTeam")}`}>


                        <div className='meet-the-team-inner'>

                            <NavLink to={"/meet-the-team"}>MEET THE TEAM</NavLink>

                        </div>

                    </div>

                    <div className={`equipment-container ${isEquipClicked ? ("showTeam") : ("hideTeam")}`}>

                        <div className='equipment-inner-container'>

                            <NavLink to={"/equipment"}>Equipment</NavLink>

                        </div>

                    </div>

                </div>



                <div className='login-containe'>

                    {user ? (

                        <>

                            <button onClick={handle_logout} to={"/login"} className='btnLogout'>Logout</button>

                            {user?.role === 'admin' ? (
                                <div className='co'>

                                    <ChevronDown onClick={() => setIsClickedManage(prev => !prev)} style={{ color: '#fff', cursor: 'pointer' }} />

                                </div>
                            ) : ("")}

                        </>


                    ) : (
                        <NavLink to={"/login"} className='btnLogin'>Login</NavLink>

                    )}

                    {user ? (

                        <div className={`manage-admin-work ${isClickedManage ? ("show-manage") : ("hide-manage")}`}>


                            <div className='manage-admin-inner'>

                                <NavLink to={"/add-team"} >Manage Team</NavLink>
                                <NavLink to={"/add-values"} >Manage Values</NavLink>

                            </div>

                        </div>
                    ) : ("")}

                    <div className='bars-icon'>

                        <a onClick={() => setIsClicked(prev => !prev)}><FaBars className='bars' style={{ cursor: 'pointer' }} /></a>

                    </div>


                </div>


            </div>


        </>

    )
}

export default Navbar
