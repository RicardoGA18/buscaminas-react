import React from 'react'

const Models = () => {
  return (
    <div className="l-container">
      <div className="l-contain Modes">
        <div className="Modes__Title">
          <p>Modos de Juego</p>
          <hr/>
        </div>
        <div className="Modes__Grid">
          <div className="Modes__Card">
            <i className="fas fa-user fa-6x"></i>
            <h3>Un Jugador</h3>
            <p>En este modo, el objetivo principal es tratar de batir tu propio récord, el cual quedará grabado en tu cuenta, e ir escalando en nuestro ranking.</p>
            <button>Jugar</button>
          </div>
          <div className="Modes__Card">
            <i className="fas fa-user-friends fa-6x"></i>
            <h3>Multijugador</h3>
            <p>Aquí puedes retar a tus amigos, y jugar con ellos en tiempo real. Ganará el primero que logre liberar todos los cuadros del tablero primero.</p>
            <button>Jugar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Models