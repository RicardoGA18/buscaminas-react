import React from 'react'
// Components
import Nav from '../components/Nav'
import Header from '../components/Header'
import HowToPlay from '../components/HowToPlay'
import Modes from '../components/Modes'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomeView = () => {
  return (
    <div className="HomeView">
      <Nav />
      <Header />
      <HowToPlay />
      <Modes />
      <Contact />
      <Footer />
      <div className="HomeView__Back">
        <p>API Docs</p>
      </div>
    </div>
  )
}

export default HomeView