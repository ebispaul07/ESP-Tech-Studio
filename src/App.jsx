import React, { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProofBar from './components/SocialProofBar'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import ClientProjects from './components/ClientProjects'
import PersonalProjects from './components/PersonalProjects'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Preloader />

  return (
    <div className="bg-primary text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <About />
        <Services />
        <WhyChooseUs />
        <ClientProjects />
        <PersonalProjects />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
