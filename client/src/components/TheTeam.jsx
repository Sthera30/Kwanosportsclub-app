import React, { useEffect, useState } from 'react'
import '../css/TheTeam.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import img111 from '../../public/IMG-20241119-WA0004.jpg'
import img112 from '../../public/Screenshot_20240928_152641_com.android.gallery3d.jpg'
import img113 from '../../public/young-player-holding-racket-nmu.jpg'


import Img1 from '../../public/founder-playing-with-friend-nmu.jpg'
import img2 from '../../public/young-player-holding-racket-nmu.jpg'
import img3 from '../../public/founder-hitting-ball-with-friend-nmu.jpg'
import img4 from '../../public/founder-and-player-preparing-to-play-tennis.jpg'
import img5 from '../../public/founder-and-player-preparing-to-play-tennis-at-drosdty.jpg'
import img6 from '../../public/founder-and-player-at-the-courts.jpg'
import img7 from '../../public/player-preparing-to-play-tennis.jpg'
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

            const res = await axios.get(`http://localhost:5000/getAllTeam`)

            if (res.data.success) {
                setTeam(res.data.data.team)
            }


        } catch (error) {
            console.log(error);
        }

    }

    async function handle_remove(id) {

        try {

            const res = await axios.delete(`http://localhost:5000/removeTeam?id=${id}`)

            if (res.data.success) {
                toast.success(res.data.message)
                handle_fetch_team()
                console.log("Hello");

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

                <h1>MEET THE TEAM | KWANO SPORTS CLUB</h1>

               {/*
               
                <div className='meet-team-container'>

                    {team.map((teams) => (

                        <>

                            <div className='img-box'>

                                <img src={teams.userTeamProfile} alt={teams.userTeamName === "Thandolwethu Mbengashe" ? `${teams.userTeamName} - Tennis Player / Trainer & Member at Kwano Sports Club` : teams.userTeamName === "Vuyolwethu Mkwakwi" ? `${teams.userTeamName} - Talent Scout & Manager at Kwano Sports Club` : teams.userTeamName === "Sirtembekile Tini" ? `${teams.userTeamName} - Software Developer at Kwano Sports Club` : ""} title={teams.userTeamName === "Thandolwethu Mbengashe" ? `${teams.userTeamName} - Tennis Player / Trainer & Member at Kwano Sports Club` : teams.userTeamName === "Vuyolwethu Mkwakwi" ? `${teams.userTeamName} - Talent Scout & Manager at Kwano Sports Club` : teams.userTeamName === "Sirtembekile Tini" ? `${teams.userTeamName} - Software Developer at Kwano Sports Club` : ""} loading='lazy' width={teams.userTeamName === "Thandolwethu Mbengashe" ? "960" : teams.userTeamName === "Vuyolwethu Mkwakwi" ? "720" : teams.userTeamName === "Sirtembekile Tini" ? "1080" : ""} height={teams.userTeamName === "Thandolwethu Mbengashe" ? "1280" : teams.userTeamName === "Vuyolwethu Mkwakwi" ? "719" : teams.userTeamName === "Sirtembekile Tini" ? "2340" : ""} />

                                <div className='content'>

                                    <span>{teams.userTeamName}</span>
                                    <p>{teams.userTeamDescription}</p>

                                </div>

                                {user?.role === 'admin' ? (
                                    <div className='button-container'>

                                        <NavLink to={`/edit-team-member/${teams.id}`} className='btnEdit'>Edit</NavLink>
                                        <button onClick={() => handle_remove(teams.id)} className='btnDelete'>Delete</button>

                                    </div>
                                ) : ("")}

                            </div>



                        </>

                    ))}

                </div>
               
               */}

                <div className='meet-team-container'>

                        <>

                            <div className='img-box'>

                                <img src={img111} alt={""} />

                                <div className='content'>

                                    <span>Thandolwethu Mbengashe</span>
                                    <p>Tennis player / Trainer & Member</p>

                                </div>

                            </div>

                             <div className='img-box'>

                                <img src={img113} alt={""} />

                                <div className='content'>

                                    <span>Vuyolwethu Mkwakwi</span>
                                    <p>Talent scout & manager</p>

                                </div>

                            </div>

                            <div className='img-box'>

                                <img src={img112} alt={""} />

                                <div className='content'>

                                    <span>Sirtembekile Tini</span>
                                    <p>Software Developer</p>

                                </div>

                            </div>

                        </>

                </div>
                
            </div>

            <div className='vlog-pics-container'>

                <Swiper modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    speed={1200}
                    className="swiper-wrapper">

                    <SwiperSlide className='swiper-slide'>

                        <div className='vlog-pics'>

                            <img src={Img1} alt="Founder of Kwano Sports Club playing tennis with a friend at Nelson Mandela University" title='Founder and friend playing tennis at NMU' loading='lazy' width={1080} height={1350} />

                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide'>

                        <div className='vlog-pics'>

                            <img src={img2} alt="Young tennis player holding a racket on court at nmu" title='Player holding tennis racket on court' loading='lazy' width={960} height={1280} />

                        </div>


                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide'>

                        <div className='vlog-pics'>

                            <img src={img3} alt="Founder of Kwano Sports Club hitting a tennis ball with a friend at Nelson Mandela University" title='Founder hitting tennis ball with friend at NMU' loading='lazy' width={1080} height={1350} />

                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide'>

                        <div className='vlog-pics'>

                            <img src={img4} alt="Founder of Kwano Sports Club and a player holding tennis rackets preparing to play" title='Founder and player ready to play tennis' loading='lazy' width={1024} height={1280} />

                        </div>


                    </SwiperSlide>


                    <SwiperSlide className='swiper-slide'>

                        <div className='vlog-pics'>

                            <img src={img5} alt="Founder of Kwano Sports Club and a player preparing to play tennis at Drosdty courts" title='Founder of Kwano Sports Club and a player preparing to play tennis at Drosdty courts' loading='lazy' width={1200} height={1600} />

                        </div>


                    </SwiperSlide>


                    <SwiperSlide className='swiper-slide'>

                        <div className='vlog-pics'>

                            <img src={img6} alt="Founder of Kwano Sports Club with a player on the tennis courts" title='Founder of Kwano Sports Club with a player on the tennis courts' loading='lazy' width={1200} height={1600} />

                        </div>


                    </SwiperSlide>


                    <SwiperSlide className='swiper-slide'>

                        <div className='vlog-pics'>

                            <img src={img7} alt="Tennis player preparing to play at Drosdty" title='Tennis player preparing to play at Drosdty' loading='lazy' width={1080} height={1350} />

                        </div>


                    </SwiperSlide>




                </Swiper>


            </div>



        </>
    )
}

export default TheTeam
