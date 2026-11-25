import React from 'react'
import img1 from '../../public/tennis-court-with-net.png'
import { Helmet } from 'react-helmet'
import CommunityBuilding from '../components/CommunityBuilding.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

function CommunityBuildingPage() {
    return (
        <div>


            <Helmet>

                <title>Tennis Coaching in Uitenhage | Individual, Group & Private Sessions</title>
                <meta name="description" content="Join tennis sessions in Uitenhage for all levels. Book individual, group, or private lessons—open to kids, families, schools, and pros. No experience needed!" />
                <meta name="keywords" content="tennis coaching Uitenhage, tennis lessons, group tennis sessions, private tennis training, mobile tennis club, beginner tennis Uitenhage, tennis for schools, kids tennis training, advanced tennis coaching, Kwano Sports Club tennis" />

                {/* Recommended additional tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="http://localhost:5000/community-building" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Tennis Coaching in Uitenhage | Individual, Group & Private Sessions" />
                <meta property="og:description" content="Book tennis sessions in Uitenhage for all levels. Individual, group, and private lessons available for kids, families, schools, and professionals." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:5000/community-building" />
                <meta property="og:image" content={`http://localhost:5000/${img1}`} />
                <meta property="og:site_name" content="Kwano Sports Club" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Tennis Coaching in Uitenhage | Individual, Group & Private Sessions" />
                <meta name="twitter:description" content="Accessible tennis training for all levels. Book individual or group sessions with Kwano Sports Club. Kids and schools welcome!" />
                <meta name="twitter:image" content={`http://localhost:5000/${img1}`} />

            </Helmet>

            <CommunityBuilding />
            <Contact />
            <Footer />

        </div>
    )
}

export default CommunityBuildingPage
