import React, { useEffect, useState } from 'react'
import '../css/contact.css'
import { FaMailBulk, FaPhone, FaMailchimp } from 'react-icons/fa'

function Contact() {

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

    window.scrollTo(0,0)

  },[])

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
            <span style={{color: 'green'}}>{result}</span>

          </form>

        </div>


      </div>

    </>
  )
}

export default Contact

/*
function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "b864ad24-f1e9-4470-9ac5-068b25b9749f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="contact">
        <h2>Get in Touch</h2>
      </div>

      <div className="contact-container sec">
        <div className="contact-info">
          <h3>
            Send me a message <i className="fas fa-envelope-open"></i>
          </h3>
          <p>
            Feel free to reach out through contact form or find my contact
            information below.
          </p>
          <p>
            <i className="fas fa-phone"></i>(+27) 62 419 2299
          </p>
          <p>
            <i className="fas fa-envelope"></i>tinisthera@gmail.com
          </p>
        </div>
        <form onSubmit={async (event) => onSubmit(event)}>
          <label htmlFor="name">Enter Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="email">Enter Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="message">Write your messages here</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            cols={10}
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btnSend">
            Send message
          </button>
          <br />
        <span>{result}</span>

        </form>
      </div>
    </>
  );
}


export default Contact;

*/

//eb6025cf-c28c-4ad9-b96e-d3b44e44269c