import React from 'react'
import img1 from '../../public/kwano-sports-club-npo-certificate.png'
import { Helmet } from 'react-helmet'
import Documents from '../components/Documents.jsx'
import ContactPage from './ContactPage.jsx'
import Footer from '../components/Footer.jsx'

function DocumentsPage() {
  return (
    <div>


      <Helmet>

        <title>Download Club Documents | Kwano Sports Club NPO Certificate</title>
        <meta
          name="description"
          content="Access official club documents from Kwano Sports Club, including our NPO Certificate. Download the PDF or reach out for assistance."
        />
        <meta
          name="keywords"
          content="Kwano Sports Club documents, NPO certificate download, South African sports NPO, non-profit sports club, club verification, club legal documents, youth tennis organization"
        />
        {/* Recommended additional tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://localhost:5000/documents" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Kwano Sports Club NPO Certificate | Club Documents" />
        <meta property="og:description" content="Download the official NPO certificate of Kwano Sports Club. Contact us if you need assistance with the download." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:5000/documents" />
        <meta property="og:image" content={`http://localhost:5000/${img1}`} />
        <meta property="og:site_name" content="Kwano Sports Club" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kwano Sports Club | Download NPO Certificate" />
        <meta name="twitter:description" content="Get access to our NPO Certificate and verify our mission to empower youth through sport in South Africa." />
        <meta name="twitter:image" content={`http://localhost:5000/${img1}`} />

      </Helmet>


      <Documents />
      <ContactPage />
      <Footer />

    </div>
  )
}

export default DocumentsPage
