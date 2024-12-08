import React from 'react'
import '../css/founder.css'
import founderImg from '../assets/IMG-20241118-WA0057.jpg'
import Img1 from '../assets/IMG-20241118-WA0058.jpg'
import img2 from '../assets/IMG-20241120-WA0017.jpg'
import img3 from '../assets/IMG-20241118-WA0059.jpg'
import img4 from '../assets/IMG-20241121-WA0015.jpg'

function Founder() {
    return (
        <>

            <div className='founder-container'>

                <div className='founder-inner-container'>

                    <h1>FOUNDER</h1>

                    <div className='founder-image-container'>

                        <img src={founderImg} alt="" />

                        <div className='content'>

                            <h1>Simamkele Ngcingolo</h1>
                            <p>Tennis Player & Member</p>

                        </div>

                    </div>

                </div>

            </div>

            <div className='vlog-pics-container'>


                <div className='vlog-pics'>

                    <img src={Img1} alt="" />

                </div>

                <div className='vlog-pics'>

                    <img src={img2} alt="" />

                </div>

                <div className='vlog-pics'>

                    <img src={img3} alt="" />

                </div>


                <div className='vlog-pics'>

                    <img src={img4} alt="" />

                </div>


            </div>

        </>
    )
}

export default Founder
