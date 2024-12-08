import React from 'react'
import '../css/hero.css'
import Img1 from '../assets/top-view-table-full-food.png'
import { NavLink } from 'react-router-dom'

function Hero() {
    return (
        <>

            <div className='hero-container'>


                <div className='hero-inner'>

                    <h1>WELCOME TO KWANOBUHLE TENNIS CLUB.</h1>
                    <NavLink to={'/community-building'} className='join'>J O I N &nbsp; N O W</NavLink>

                </div>


            </div>


        </>
    )
}

export default Hero
