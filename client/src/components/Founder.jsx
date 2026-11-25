import React from 'react'
import '../css/founder.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import founderImg from '../../public/kwano-sports-club-founder-uitenhage.jpg'
import Img1 from '../../public/founder-playing-with-friend-nmu.jpg'
import img2 from '../../public/young-player-holding-racket-nmu.jpg'
import img3 from '../../public/founder-hitting-ball-with-friend-nmu.jpg'
import img4 from '../../public/founder-and-player-preparing-to-play-tennis.jpg'
import img5 from '../../public/founder-and-player-preparing-to-play-tennis-at-drosdty.jpg'
import img6 from '../../public/founder-and-player-at-the-courts.jpg'
import img7 from '../../public/player-preparing-to-play-tennis.jpg'

function Founder() {
    return (
        <>

            <div className='founder-container'>

                <div className='founder-inner-container'>

                    <h2>FOUNDER</h2>

                    <div className='founder-image-container'>

                        <img src={founderImg} alt="Founder of Kwano Sports Club supporting youth tennis in Kwanobuhle, Uitenhage" title='Kwano Sports Club Founder | Uplifting Youth Through Tennis' loading='lazy' width={1024} height={1280} />

                        <div className='content'>

                            <h2>Simamkele Ngcingolo</h2>
                            <p>Tennis Player & Member</p>

                        </div>

                    </div>

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

export default Founder
