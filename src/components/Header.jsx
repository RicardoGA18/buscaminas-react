import React from 'react'
// Assets
import mina from '../assets/mina.svg'
import {useHistory} from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  return (
    <div className="Header l-container">
      <div className="l-contain">
        <img src={mina} alt="Mina Icono" className="Header__Mine"/>
        <img src={mina} alt="Mina Icono" className="Header__Mine"/>
        <img src={mina} alt="Mina Icono" className="Header__Mine"/>
        <img src={mina} alt="Mina Icono" className="Header__Mine"/>
        <img src={mina} alt="Mina Icono" className="Header__Mine"/>
        <img src={mina} alt="Mina Icono" className="Header__Mine"/>
        <img src={mina} alt="Mina Icono" className="Header__Mine"/>
        <span className="Header__Number">2</span>
        <span className="Header__Number">3</span>
        <span className="Header__Number">1</span>
        <span className="Header__Number">2</span>
        <div className="Header__Content">
          <h1>BuscaminasPVP</h1>
          <p>Juega al clásico y popular buscaminas con tus amigos en tiempo real, o puedes jugar en solitario para romper tus propios récords, ascender en nuestro ranking y demostrarle a los demás que eres el mejor. Aceptas el desafío?</p>
          <button onClick={() => {history.push('/jugar')}}>Juega ahora</button>
        </div>
      </div>
    </div>
  )
}

export default Header