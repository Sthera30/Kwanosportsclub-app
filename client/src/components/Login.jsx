import React, { useState } from 'react'
import imgLogo from '../assets/logo.png'
import '../css/login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import {GiTennisRacket} from 'react-icons/gi'
import { useUserContext } from '../context/userContext'


function Login() {

    const [data, setData] = useState({ email: '', password: '' })
    const navigate = useNavigate()

    const {user, setUser} = useUserContext()

    async function handle_login(e) {

        e.preventDefault()

        const { email, password } = data

        try {
                                                                                                       //SEND COOKIES
            const { data } = await axios.post("http://localhost:8081/login", { email, password }, {withCredentials: true})

            if (data.error) {
                toast.error(data.error)
            }

            else {
                toast.success("Success!")

                const res = await axios.get('http://localhost:8081/getUser', {withCredentials:true})

                if(res.data.success){
                    setUser(res.data.data.user)
                    navigate('/')
                }

            }


        } catch (error) {
            console.log(error);

        }

    }


    return (
        <div className='login-container'>


            <div className='login'>

                <div className='logo-container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                <GiTennisRacket style={{ color: 'green', fontSize: '2.8rem', marginBottom: '1rem' }} />
                <span style={{fontSize:'2rem', maxWidth: '15rem', margin:'1.2rem 0rem', textAlign:'center'}}>Tennis Club Login</span>
                <p style={{color: '#333', fontWeight: '300', fontSize: '1rem'}}>Step onto the court—log in and take your first swing at greatness! </p>

                </div>

                <form onSubmit={handle_login}>

                    <label>Email</label>
                    <input type="text" name='email' placeholder='Enter your email' onChange={(e) => setData({ ...data, email: e.target.value })} />
                    <label>Password</label>
                    <input type="password" name='password' placeholder='Enter your password' onChange={(e) => setData({ ...data, password: e.target.value })} />


                    <div className='pass-con'>

                        <div className='pass-left'>


                        </div>

                        <div className='pass-right'>

                            <NavLink style={{textDecoration: 'none'}} to={"/reset-password"}>

                                <NavLink to={"/verify-email"} style={{ marginBottom: '1rem', textDecoration: 'none', color: 'green' }}>Forgot password ?</NavLink>


                            </NavLink>

                        </div>

                    </div>

                    <button type='submit' className='btnSignIn'>Sign In</button>


                </form>

            </div>

            </div>

    )
}

export default Login
