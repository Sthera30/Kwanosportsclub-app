import React from 'react'
import img1 from '../../public/kwano-tennis-player-youth-training-uitenhage.jpg'
import { Helmet } from 'react-helmet'
import GetInvolved from '../components/GetInvolved.jsx'
import ContactPage from './ContactPage.jsx'
import Footer from '../components/Footer.jsx'

function GetInvolvedPage() {
  return (
    <div>


      <Helmet>

        <title>Get Involved | Support Tennis Development at Kwano Sports Club</title>
        <meta name="description" content="Support Kwano Sports Club through private tennis lessons or donations. Help us grow tennis in Kwanobuhle and fund our first community tennis facility." />
        <meta name="keywords" content="donate to tennis club, private tennis lessons, support youth sports, community tennis development, Kwanobuhle tennis, Kwano Sports Club donations, fund tennis courts, get involved in sports development, sponsor tennis club South Africa" />

        {/* Recommended additional tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://localhost:5000/get-involved" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Get Involved | Support Tennis Development at Kwano Sports Club" />
        <meta property="og:description" content="Support Kwano Sports Club by booking private lessons or making a donation. Help us build our first tennis facility in Kwanobuhle and inspire future athletes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:5000/get-involved" />
        <meta property="og:image" content={`http://localhost:5000/${img1}`} />
        <meta property="og:site_name" content="Kwano Sports Club" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Involved | Support Tennis Development at Kwano Sports Club" />
        <meta name="twitter:description" content="Join our mission to grow tennis in Kwanobuhle. Book lessons or donate to help us build a community tennis court." />
        <meta name="twitter:image" content={`http://localhost:5000/${img1}`} />

      </Helmet>

      <GetInvolved />
      <ContactPage />
      <Footer />

    </div>
  )
}

export default GetInvolvedPage
