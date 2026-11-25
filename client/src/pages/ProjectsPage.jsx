import React from 'react'
import img1 from '../../public/tennis-ball-laying-floor.jpg'
import { Helmet } from 'react-helmet'
import Projects from '../components/Projects.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import Footer from '../components/Footer.jsx'

function ProjectsPage() {
    return (
        <div>

            <Helmet>

                <title>Kwano Sports Club Projects | Tennis Infrastructure & Youth Development</title>
                <meta name='description' content="Kwano Sports Club's future plans include building tennis courts in Kwanobuhle, reviving school sports, and offering media training — all dependent on funding support." />
                <meta name='keywords' content="Kwano Sports Club, youth sports development, build tennis courts, Kwanobuhle community projects, township sports programs, school sports South Africa, tennis in Kwanobuhle, sports funding South Africa, media training for young athletes, township youth programs" />

                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="http://localhost:5000/projects" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Kwano Sports Club Projects | Empowering Youth Through Sport" />
                <meta property="og:description" content="Kwano Sports Club's future plans include building tennis courts in Kwanobuhle, reviving school sports, and offering media training — all dependent on funding support." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:5000/projects" />
                <meta property="og:image" content={`http://localhost:5000/${img1}`} />
                <meta property="og:site_name" content="Kwano Sports Club" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kwano Sports Club Projects | Empowering Youth Through Sport" />
                <meta name="twitter:description" content="Future plans include building tennis courts in Kwanobuhle, reviving school sports, and offering media training — all dependent on funding support." />
                <meta name="twitter:image" content={`http://localhost:5000/${img1}`} />

            </Helmet>

            <Projects />
            <ContactPage />
            <Footer />
        </div>
    )
}

export default ProjectsPage
