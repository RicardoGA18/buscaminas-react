import React from 'react'

const Slide = ({title,description,img,setImage,isMobile}) => {
  const setClass = () => {
    if(setImage === 'multiplayer'){
      return "is-multiplayer"
    }else if(setImage === 'ranking'){
      return 'is-ranking'
    }
  }

  const setMobileClass = () => {
    if(isMobile){
      return 'is-mobile'
    }
  }

  return (
    <div className={`Slide ${setMobileClass()}`}>
      <div className="Slide__Img">
        <img src={img} alt={title} className={setClass()}/>
      </div>
      <div className="Slide__Info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Slide