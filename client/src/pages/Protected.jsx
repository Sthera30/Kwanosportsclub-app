import React, { useEffect, useState } from 'react'
import { useUserContext } from '../context/userContext.jsx'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Protected({ children }) {


    const { user, setUser } = useUserContext()

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    async function handle_fetch() {

        try {

            const res = await axios.get('http://localhost:8081/getUser', { withCredentials: true })

            if (res.data.success) {
                setUser(res.data.data.user)
            }

            else {
                setUser(null)
                navigate('/login', { replace: true })
            }


        } catch (error) {
            console.log(error);
            setUser(null)
        } finally {
            setIsLoading(true)
        }

    }

    useEffect(() => {

        handle_fetch()

    }, [])

    if (isLoading) {
        <div>Loading...</div>
        return null
    }

    if (!user) {
        navigate('/login', { replace: true })
    }


    return (

        <>{children}</>
    )


}


export default Protected
