import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { FaStar, FaStarHalf } from 'react-icons/fa'
import Img1 from '../assets/Screenshot 2024-12-07 at 17.01.25.png'
import Img2 from '../assets/IMG-20241203-WA0067_edit_294548708659221.jpg'
import Img3 from '../assets/IMG-20241207-WA0021.jpg'
import Img4 from '../assets/IMG-20241205-WA0060_edit_297245465467663.jpg'
import '../css/review.css'

function Review() {


    return (
        <>

            <div className='review-heading'>

                <h3>Player Testimonials</h3>

            </div>

            <div className="review-container">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 9000, disableOnInteraction: false }}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="swiper-wrapper"
                >
                    <SwiperSlide className="swiper-slide">
                        <div className="player-box">
                            <div className="rating-star">
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                            </div>
                            <p>
                                I had an excellent experience with Simamkele. He was incredibly
                                patient, making every session enjoyable and stress-free. His ability to break down techniques into simple, easy-to-grasp steps was a game-changer for my learning. He was also very encouraging, always motivating me to improve while maintaining a positive attitude. I highly recommend him to anyone looking to enhance
                                their tennis skills!
                            </p>
                            <div className="info-container">
                                <img src={Img1} alt="" />
                                <div className="user-info">
                                    <p>Tumiso Chuma</p>
                                    <p>Legal Practitioner</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <div className="player-box">
                            <div className="rating-star">
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStarHalf style={{ color: "goldenrod" }} />
                            </div>
                            <p>
                                Simamkele is a very tough opponent. He has always pushed me in our
                                matches and has always brought out the best in me. He's an
                                extremely hardworking guy and I would definitely recommend him as
                                someone who can coach tennis.
                            </p>
                            <div className="info-container">
                                <img src={Img2} alt="" />
                                <div className="user-info">
                                    <p>Gershin Williams</p>
                                    <p>Tennis Player</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <div className="player-box">
                            <div className="rating-star">
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                            </div>
                            <p>
                                I've had the pleasure of playing tennis with Simamkele, and i can confidently say he's standout player. His dedication to the sport is inspiring, and his skills on the court are impressive. Simamkele is a team player with a great attitude, and i highly recommend him to anyone looking for a reliable and talented tennis partner.
                            </p>
                            <div className="info-container">
                                <img src={Img3} alt="" />
                                <div className="user-info">
                                    <p>Zolile Ngwenya</p>
                                    <p>PHD Student</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <div className="player-box">
                            <div className="rating-star">
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                                <FaStar style={{ color: "goldenrod" }} />
                            </div>
                            <p>
                                I think of our matches as the analogy of how the mother eagle trains her eaglet yo leave the nest, pushing it over the cliff and forces it to learn how to fly. It's been extremely challenging to level up to you in a match but i'm grateful that i've learned how to fly. Thank you.
                            </p>
                            <div className="info-container">
                                <img src={Img4} alt="" />
                                <div className="user-info">
                                    <p>Vernon Niland</p>
                                    <p>Pastor</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    )
}

export default Review
