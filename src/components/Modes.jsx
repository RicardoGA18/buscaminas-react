import React from 'react'
import multiplayer from '../assets/multiplayer.png' 
import ranking from '../assets/ranking.png'
import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom'
import desktop from '../assets/desktop.png'

const Models = () => {
  const history = useHistory()

  const setModal = view => {
    if(window.innerWidth >=1000){
      history.push(`/jugar/${view}`)
    }else{
      Swal.fire({
        title: 'Whoops!',
        html: `<span style="color: black">Por el momento el juego solo funciona en desktop, cambia de dispositivo para comenzar a jugar.</span>`,
        imageUrl: desktop,
        imageWidth: 100,
        imageHeight: 88.89,
        imageAlt: 'Desktop',
      })
    }
  }

  const commingSoon = () => {
    Swal.fire({
      title: 'Proximamente!',
      icon: 'info'
    })
  }

  return (
    <div className="l-container">
      <div className="l-contain Modes">
        <div className="Modes__Title">
          <p>Modos de Juego</p>
          <hr/>
        </div>
        <div className="Modes__Grid">
          <div className="Modes__Card">
            <img src={ranking} alt="ranking"/>
            <h3>Ranking</h3>
            <p>En este modo, el objetivo principal es tratar de batir tu propio récord, el cual quedará grabado en tu cuenta, e ir escalando en nuestro ranking.</p>
            <button onClick={() => {setModal('un-jugador')}}>Jugar</button>
          </div>
          <div className="Modes__Card">
            <img src={multiplayer} alt="multijugador"/>
            <h3>Multijugador</h3>
            <p>Aquí puedes retar a tus amigos, y jugar con ellos en tiempo real. Ganará el primero que logre liberar todos los cuadros del tablero primero.</p>
            <button onClick={commingSoon}>Jugar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Models