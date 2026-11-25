import React from 'react'
import img1 from '../../public/kwano-sports-club-founder-uitenhage.jpg'
import { Helmet } from 'react-helmet'
import Contact from '../components/Contact.jsx'

function ContactPage() {
    return (
        <div>


            <Helmet>

                <title>Contact Kwano Sports Club | Connect With Us</title>
                <meta
                    name="description"
                    content="Reach out to Kwano Sports Club in Kwanobuhle for tennis training, equipment donations, or community partnerships. We'd love to hear from you!"
                />
                <meta
                    name="keywords"
                    content="Kwano Sports Club contact, tennis club Kwanobuhle, youth sports South Africa, equipment donation, tennis training support, community sports club, get in touch tennis academy"
                />
                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="http://localhost:5000/contact-us" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Contact Kwano Sports Club | Connect With Us" />
                <meta property="og:description" content="Get in touch with our team for donations, training sessions, or partnerships. We're here to grow tennis in Kwanobuhle together." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:5000/contact-us" />
                <meta property="og:image" content={`http://localhost:5000/${img1}`} />
                <meta property="og:site_name" content="Kwano Sports Club" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Kwano Sports Club | Connect With Us" />
                <meta name="twitter:description" content="Have a question or want to support our mission? Contact Kwano Sports Club today." />
                <meta name="twitter:image" content={`http://localhost:5000/${img1}`} />

            </Helmet>

            <Contact />

        </div>
    )
}

export default ContactPage
