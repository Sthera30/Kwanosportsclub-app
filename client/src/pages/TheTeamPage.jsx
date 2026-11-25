import React from 'react'
import TheTeam from '../components/TheTeam.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import Footer from '../components/Footer.jsx'
import { Helmet } from 'react-helmet'
import img1 from '../../public/kwano-youth-tennis-players-with-rackets.jpg'

function TheTeamPage() {
  return (
    <div>

      <Helmet>

        <title>Meet the Team | Kwano Sports Club Tennis Coaches & Staff</title>
        <meta name='description' content='Meet the dedicated team behind Kwano Sports Club in Kwanobuhle. Our coaches, talent scouts, and staff are committed to developing tennis talent and serving the community.' />
        <meta name='keywords' content='Kwano Sports Club team, tennis coaches Kwanobuhle, township tennis trainers, Eastern Cape tennis talent scouts, Kwano tennis staff' />

        {/* Recommended additional tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://localhost:5000/meet-the-team" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Meet the Kwano Sports Club Team | Tennis Coaches" />
        <meta property="og:description" content="Get to know our passionate team of tennis coaches, talent scouts, and our developer dedicated to transforming lives through sport in Kwanobuhle township." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:5000/meet-the-team" />
        <meta property="og:image" content={`http://localhost:5000/${img1}`} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Faces Behind Kwano Sports Club | Tennis Development Team" />
        <meta name="twitter:description" content="Meet our passionate team bringing tennis opportunities to the youth of Kwanobuhle township." />
        <meta name="twitter:image" content={`http://localhost:5000/${img1}`} />


      </Helmet>

      <TheTeam />
      <ContactPage />
      <Footer />

    </div>
  )
}

export default TheTeamPage
