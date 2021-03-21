import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

const LogNav = () => {
  return (
    <div className="LogNav l-container">
      <div className="l-contain">
        <Link to="/">
          <div className="LogNav__Logo">
            <img src={logo} alt="Logo BuscaminasPVP"/>
            <p>BuscaminasPVP</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default LogNav