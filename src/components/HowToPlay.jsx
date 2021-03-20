import React from 'react'

const HowToPlay = () => {
  return (
    <div className="HowToPlay l-container">
      <div className="l-contain">
        <div className="HowToPlay__Title">
          <h2>Cómo Jugar</h2>
          <hr/>
        </div>
        <p className="HowToPlay__Description">El juego consiste en despejar todas las casillas de la pantalla que no oculten una mina.<br />Algunas casillas tienen un número, este número indica las minas que son en todas las casillas circundantes. Así, si una casilla tiene el número 3, significa que de las ocho casillas que hay alrededor (si no es en una esquina o borde) hay 3 con minas y 5 sin minas. Si se descubre una casilla sin número indica que ninguna de las casillas vecinas tiene mina y estas se descubren automáticamente.</p>
        <div className="HowToPlay__Grid">
          <div className="HowToPlay__Item">
            <i className="fas fa-times-circle fa-2x"></i>
            <p>Si se descubre una casilla con una mina se pierde la partida.</p>
          </div>
          <div className="HowToPlay__Item">
            <i className="fas fa-flag fa-2x"></i>
            <p>Se puede poner una marca en las casillas que el jugador piensa que hay minas para ayudar a descubrir la que están cerca.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToPlay