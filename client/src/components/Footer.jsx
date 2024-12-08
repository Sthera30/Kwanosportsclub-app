import React, { useEffect } from 'react'
import imgLogo from '../assets/logo.png'
import '../css/footer.css'
import { NavLink } from 'react-router-dom'
import { FaWhatsapp, FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa'
import { GiTennisRacket } from 'react-icons/gi'


function Footer() {


    useEffect(() => {

       // window.scrollTo(0, 0)

    }, [])

    const email = "kwanosportsclub@gmail.com"
    const currentYear = new Date().getFullYear()

    return (

        <>

            <div className='footer-container'>

                <div className='footer-inner'>

                    <GiTennisRacket className='tennis-court' />
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} target='_blank' role='noopener noreferrer'>kwanosportsclub@gmail.com</a>
                    <p>NPO 304-150</p>

                    <div className='socials'>

                        <a style={{ textDecoration: 'none' }} href="https://wa.me/qr/VDW2DXP3LKXHK1ß" target='_blank' rel='noopener noreferrer'><FaWhatsapp style={{ color: '#fff', background: 'lime', borderRadius: '.5rem', width: '2rem', height: '2rem', lineHeight: '2', padding: '.4rem' }} /></a>
                        <a style={{ textDecoration: 'none' }} href="https://www.facebook.com/share/oijsj5vjob81UYpo/?mibextid=qi2Omg" target='_blank' rel='noopener noreferrer'><FaFacebook style={{ color: '#fff', background: 'blue', borderRadius: '.5rem', width: '2rem', height: '2rem', lineHeight: '2', padding: '.4rem' }} /></a>
                        <a style={{ textDecoration: 'none' }} href="https://www.tiktok.com/@khedsmann?_t=ZM-8rh9eweHdgu&_r=1" target='_blank' rel='noopener noreferrer'><FaTiktok style={{ color: '#fff', background: '#333', borderRadius: '.5rem', width: '2rem', height: '2rem', lineHeight: '2', padding: '.4rem' }} /></a>
                        <a style={{ textDecoration: 'none' }} href="https://www.instagram.com/khedsmann?igsh=MzNINGNkZWQ4Mg==" target='_blank' rel='noopener noreferrer'><FaInstagram style={{ color: '#fff', background: 'linear-gradient(65deg, hsl(300, 93%, 40%), orange)', borderRadius: '.5rem', width: '2rem', height: '2rem', lineHeight: '2', padding: '.4rem' }} /></a>

                    </div>

                    <div className='credit'>

                        <span>© Copyright {currentYear}   &nbsp;&nbsp;|  &nbsp;&nbsp;  ALL RIGHTS RESERVED   &nbsp;&nbsp; |  &nbsp;&nbsp;  DEVELOPED BY <span className='st'>SIRTEMBEKILE</span></span>

                    </div>

                </div>


            </div>

        </>

    )
}

export default Footer
