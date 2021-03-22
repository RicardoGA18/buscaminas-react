import React from 'react'
import {useHistory} from 'react-router-dom'
// Components
import Nav from '../components/Nav'
import Header from '../components/Header'
import HowToPlay from '../components/HowToPlay'
import Modes from '../components/Modes'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomeView = () => {
  const history = useHistory()

  return (
    <div className="HomeView">
      <Nav />
      <Header />
      <HowToPlay />
      <Modes />
      <Contact />
      <Footer />
      <a href="https://buscaminas-backend.herokuapp.com/api/docs/">
        <div className="HomeView__Back">
          <p>API Docs</p>
        </div>
      </a>
    </div>
  )
}

export default HomeView