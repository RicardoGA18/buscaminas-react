import React from 'react'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'
import Slide from './Slide'
import numbers from '../assets/numbers.png'
import flags from '../assets/flags.png'
import empty from '../assets/empty.png'
import multiplayer from '../assets/multiplayer.png'
import ranking from '../assets/ranking.png'

const ModalCarousel = ({open,onClose,onStart,mobile}) => {
  return (
    <AutoRotatingCarousel
      label='Entendido'
      open={open}
      onClose={onClose}
      onStart={onStart}
      style={{ position: 'absolute' }}
      autoplay={false}
      mobile={mobile}
    >
      <Slide 
        title="Números"
        description="Cada número indica las minas que hay en contacto con esa casilla. Cada casilla puede entrar en contacto con  a lo más 8 minas."
        img={numbers}
        isMobile={mobile}
      />
      <Slide 
        title="Banderas"
        description="Las banderas deben marcar el lugar donde se cree que se oculta una mina. Se debe hacer clic derecho sobre la casilla sospechosa para poder marcarla."
        img={flags}
        isMobile={mobile}
      />
      <Slide 
        title="Casillas Vacías"
        description="En ocasiones, te encontrarás con casillas que no poseen número. De ser el caso, se liberarán todas las casillas adyacentes hasta quedar rodeadas por números."
        img={empty}
        setImage={'multiplayer'}
        isMobile={mobile}
      />
      <Slide 
        title="Multijugador"
        description="En el modo multijugador, la partida concluye cuando uno de los jugadores libera todo su tablero primero."
        img={multiplayer}
        setImage={'multiplayer'}
        isMobile={mobile}
      />
      <Slide 
        title="Ranking"
        description="En el modo multijugador, la partida concluye cuando uno de los jugadores libera todo su tablero primero."
        img={ranking}
        setImage={'ranking'}
        isMobile={mobile}
      />
    </AutoRotatingCarousel>
  )
}

export default ModalCarousel