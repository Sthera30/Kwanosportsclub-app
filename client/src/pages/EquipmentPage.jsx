import React from 'react'
import img1 from '../../public/tennis-ball-laying-floor.jpg'
import { Helmet } from 'react-helmet'
import Equipment from '../components/Equipment.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

function EquipmentPage() {
  return (
    <div>

      <Helmet>

        <title>Donate Sports Equipment | Support Tennis & Soccer Youth in Kwanobuhle</title>
        <meta
          name="description"
          content="Donate tennis rackets, balls, soccer boots, and kits to help underprivileged youth in Kwanobuhle stay active and passionate about sports. Your support makes a difference."
        />
        <meta
          name="keywords"
          content="donate sports equipment, tennis donations, soccer donations, youth sports support, township kids tennis, donate tennis rackets, soccer boots donation, Kwanobuhle sports, Kwano Sports Club, second hand tennis balls"
        />
        {/* Recommended additional tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://localhost:5000/equipment" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Donate Sports Equipment | Support Young Athletes in Kwanobuhle" />
        <meta property="og:description" content="Help us equip underprivileged kids with tennis and soccer gear. Donate rackets, balls, and kits to support their passion for sport." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:5000/equipment" />
        <meta property="og:image" content={`http://localhost:5000/${img1}`} />
        <meta property="og:site_name" content="Kwano Sports Club" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Donate Sports Equipment | Support Young Athletes in Kwanobuhle" />
        <meta name="twitter:description" content="Your donation of tennis and soccer gear helps young athletes thrive. Support the next generation today." />
        <meta name="twitter:image" content={`http://localhost:5000/${img1}`} />

      </Helmet>


      <Equipment />
      <Contact />
      <Footer />

    </div>
  )
}

export default EquipmentPage
