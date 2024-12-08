import React, { useEffect, useState } from 'react'
import '../css/contact.css'
import { FaMailBulk, FaPhone, FaMailchimp } from 'react-icons/fa'
import Footer from '../components/Footer.jsx'

function ContactUsPage() {



    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target);

        formData.append("access_key", "eb6025cf-c28c-4ad9-b96e-d3b44e44269c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email sent...");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    useEffect(() => {

        window.scrollTo(0, 0)

    }, [])


    return (
        <>

            <div className='contact-container'>

                <h1>GET IN TOUCH</h1>

            </div>


            <div className='contact-container-inner'>

                <div className='left-container'>

                    <p>Send us a message &nbsp; <FaMailBulk style={{ color: 'orange' }} /> </p>
                    <p>For queries on how to become a club member, get lessons or bookings for your school, use the details below:</p>
                    <p><FaPhone fontSize={'1.5rem'} style={{ color: 'blue' }} /> &nbsp; (+27) 78 065 1482</p>
                    <p><FaMailBulk fontSize={'1.5rem'} style={{ color: 'orange' }} /> &nbsp; kwanosportsclub@gmail.com</p>

                </div>


                <div className='right-containers'>

                    <form onSubmit={async (event) => onSubmit(event)}>

                        <label>Enter Your Name</label>
                        <input type='text' id='name' name='name' placeholder='Enter your name here' required />

                        <label>Enter Your Email</label>
                        <input type='email' id='email' name='email' placeholder='Enter your email here' required />

                        <label>Write your messages here.</label>
                        <textarea name="message" id="message" rows={10} cols={10} placeholder='Enter your message' required></textarea>

                        <button>Send message</button>
                        <br />
                        <span style={{ color: 'green' }}>{result}</span>

                    </form>

                </div>


            </div>

            <Footer />

        </>
    )
}


export default ContactUsPage
