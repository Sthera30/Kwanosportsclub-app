import React from 'react'
import { Helmet } from 'react-helmet'
import img1 from '../../public/kwano-sports-club-tennis-coaches.jpg'
import AboutBurner from '../components/AboutBurner.jsx'
import AboutUs from '../components/AboutUs.jsx'
import Founder from '../components/Founder.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import Footer from '../components/Footer.jsx'

function AboutUsPage() {
    return (
        <div>

            <Helmet>


                <title>About Kwano Sports Club | Community Tennis & Youth Development in Kwanobuhle</title>
                <meta name='description' content='Established in 2024, Kwano Sports Club aims to transform lives in Kwanobuhle through tennis, education, and holistic youth development based on faith and Ubuntu principles.' />
                <meta name='keywords' content='Kwano Sports Club, Kwanobuhle tennis, youth sports development, Nelson Mandela Bay sports, community tennis program, Ubuntu sports initiative, Eastern Cape sports development.' />

                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="http://localhost:5000/about-us" />

                {/* Open Graph tags */}
                <meta property="og:title" content="About Kwano Sports Club | Community Sports Development" />
                <meta property="og:description" content="Founded in 2024, Kwano Sports Club transforms Kwanobuhle through tennis and holistic youth development. Our mission is rooted in faith, discipline, unity, love, and hard work." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:5000/about-us" />
                <meta property="og:image" content={`http://localhost:5000/${img1}`} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Kwano Sports Club | Tennis & Youth Development in Eastern Cape" />
                <meta name="twitter:description" content="Discover how Kwano Sports Club is transforming Kwanobuhle through tennis, education, and community-centered development with Ubuntu principles." />
                <meta name="twitter:image" content={`http://localhost:5000/${img1}`} />


            </Helmet>

            <AboutBurner />
            <AboutUs />
            <Founder />
            <ContactPage />
            <Footer />

        </div>
    )
}

export default AboutUsPage
