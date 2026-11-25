import React, { useEffect } from 'react'
import { FaUtensilSpoon } from 'react-icons/fa'
import { BuildingIcon, CircleDotIcon, SchoolIcon, TrophyIcon, MicIcon } from 'lucide-react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Img1 from '../../public/founder-playing-with-friend-nmu.jpg'
import img2 from '../../public/young-player-holding-racket-nmu.jpg'
import img3 from '../../public/founder-hitting-ball-with-friend-nmu.jpg'
import img4 from '../../public/founder-and-player-preparing-to-play-tennis.jpg'
import img5 from '../../public/founder-and-player-preparing-to-play-tennis-at-drosdty.jpg'
import img6 from '../../public/founder-and-player-at-the-courts.jpg'
import img7 from '../../public/player-preparing-to-play-tennis.jpg'
import '../css/projects.css'

function Projects() {


    useEffect(() => {

        window.scrollTo(0, 0)

    }, [])

    return (
        <>

            <div className='project-burner-container-'>

                <div className='project-burner-containers'>


                </div>


            </div>

            <div className='projects-heading'>

                <h1>Upcoming Kwano Sports Club Projects</h1>

            </div>

            <div className='projects-container'>

                <div className='projects-box'>

                    <h2><BuildingIcon className='build' style={{ color: 'blue' }} /> &nbsp;&nbsp; Infrastructure</h2>
                    <div className='build'>
                        <CircleDotIcon style={{ color: 'green' }} /> <p>Building quality and secure sports infrastructure for communities in need</p>

                    </div>
                    <ul>

                        <li>Build community tennis courts</li>
                        <li>Collaborate with schools in underdeveloped South African communities</li>
                        <li>Create multipurpose sport centres where learners can play freely in a safe environment</li>

                    </ul>

                </div>

                <div className='projects-box'>

                    <h2><SchoolIcon style={{ color: 'green' }} /> &nbsp;&nbsp;School sports</h2>
                    <p><TrophyIcon style={{ color: 'rgb(148, 108, 5)' }} /> &nbsp;&nbsp;It is our goal to build interest and revive schools sports</p>
                    <ul>

                        <li>We draw up annual programs for schools to follow through the year and have school sports be a yearly investment instead of seasonally.</li>
                        <li>Working with the schools and having the support of the community we believe it is possible to achieve this feat.</li>
                        <li>Ours is to ensure the deserving children who are active in sport get a fair opportunity to get proper training and development from a young age.</li>
                        <li>This would contribute to South Africa bagging more medals at Olympics and African games in the near future as development is the cornerstone of success of such events. </li>

                    </ul>

                </div>

                <div className='projects-box'>

                    <h2><MicIcon style={{ color: 'purple' }} /> &nbsp;&nbsp;Media Training</h2>

                    <div className='build'>

                        <MicIcon style={{ color: 'purple' }} />
                        <p>Preparing young players for international media interactions and building communication skills</p>

                    </div>

                    <ul>

                        <li>Conduct after game interviews with young players</li>
                        <li>Equip players with media handling skills from a young age</li>
                        <li>Promote players on social media platforms</li>
                        <li>Create opportunities for audience growth and sponsor exposure </li>

                    </ul>

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

export default Projects
