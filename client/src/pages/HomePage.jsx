import React from 'react'
import img1 from '../../public/kwano-sports-club-logo.png'
import { Helmet } from 'react-helmet'
import HeroPage from './HeroPage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import Footer from '../components/Footer.jsx'
import Review from '../components/Review.jsx'

function HomePage() {
  return (
    <div>

      <Helmet>


        <title>Kwano Sports Club | Premier Township Tennis Academy</title>
        <meta name='description' content='A Tennis Club in the township looking to be the first of its kind, to keep the youth off the streets, promote young players, bring families together and create wholesome content.' />
        <meta name='keywords' content='tennis club, township tennis, youth tennis development, tennis coaching for kids, Kwano Sports Club, community tennis programs, sports development, tennis academy South Africa, youth sports programs, family sports activities' />

        {/* Recommended additional tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://localhost:5173/" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Kwano Sports Club | Township Tennis Academy in South Africa" />
        <meta property="og:description" content="A unique township tennis academy focused on empowering youth, building community, and inspiring the next generation through sport." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:5173/" />
        <meta property="og:image" content={`http://localhost:5000/${img1}`} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kwano Sports Club | Empowering Youth Through Tennis" />
        <meta name="twitter:description" content="Join South Africa’s first township tennis club to uplift communities, promote young talent, and inspire families through the power of sport." />
        <meta name="twitter:image" content={`http://localhost:5000/${img1}`} />


      </Helmet>

      <HeroPage />
      <AboutPage />
      <Review />
      <ContactPage />
      <Footer />

    </div>
  )
}

export default HomePage


