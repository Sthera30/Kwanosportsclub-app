import React from 'react'
import HeroPage from './HeroPage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import Footer from '../components/Footer.jsx'
import Review from '../components/Review.jsx'

function HomePage() {
  return (
    <div>

      <HeroPage />
      <AboutPage />
      <Review />
      <ContactPage />
      <Footer />

    </div>
  )
}

export default HomePage
