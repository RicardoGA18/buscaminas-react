import React from 'react'
import {Link} from 'react-router-dom'
// Context
import {useContext} from 'react'
import AppContext from '../context/App/AppContext'
// Assets
import logo from '../assets/logo.png'

const Nav = () => {
  const {user} = useContext(AppContext)

  const manageUser = () => {
    if(user){
      return (
        <>
          <div className="Nav__User">
            {user.img
              ? (<div className="Nav__UserImg"><img src={user.img} alt={`Foto de perfil de ${user.username}`} /></div>)
              : (<i className="fas fa-user"></i>)}
            <p>{user.username}</p>
          </div>
          <div className="Nav__LogOut">
            <button>
              <i className="fas fa-sign-out-alt fa-2x"></i>
            </button>
          </div>
        </>
      )
    }else{
      return (
        <div className="Nav__Item">
          <p>Mi cuenta</p>
        </div>
      )
    }
  }

  const manageMobUser = () => {
    if(user){
      return (
        <>
          <div className="NavMob__User">
            {user.img
              ? (<div className="NavMob__UserImg"><img src={user.img} alt={`Foto de perfil de ${user.username}`} /></div>)
              : (<i className="fas fa-user"></i>)}
          </div>
          <div className="NavMob__LogOut">
            <button><i className="fas fa-sign-out-alt"></i></button>
          </div>
        </>
      )
    }else{
      return <></>
    }
  }

  return (
    <>
      <div className="Nav l-container">
        <div className="l-contain">
          <Link to="/">
            <div className="Nav__Logo">
              <img src={logo} alt={'Logo BuscaminasPVP'}/>
              <p>BuscaminasPVP</p>
            </div>
          </Link>
          <div className="Nav__List">
            <div className="Nav__Item">
              <p>Inicio</p>
            </div>
            <div className="Nav__Item">
              <p>¿Cómo Jugar?</p>
            </div>
            <div className="Nav__Item">
              <p>Modos de juego</p>
            </div>
            {manageUser()}
            <div className="Nav__Play">
              <button>Jugar</button>
            </div>
          </div>
        </div>
      </div>
      <nav className="NavMob l-container">
        <div className="l-contain">
          <Link to="/">
            <div className="NavMob__Logo">
              <img src={logo} alt={'Logo BuscaminasPVP'}/>
              <p>BuscaminasPVP</p>
            </div>
          </Link>
          <div className="NavMob__Buttons">
            {manageMobUser()}
            <div className="NavMob__Play">
              <button>Jugar</button>
            </div>
            <div className="NavMob__Bars">
              <div className="NavMob__Check">
                <input type="checkbox"/>
                <i className="fas fa-bars fa-2x"></i>
                <i className="fas fa-times fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav