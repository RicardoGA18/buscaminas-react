import React from 'react'

const Contact = () => {
  return (
    <div className="Contact l-container">
      <div className="l-contain">
        <div className="Contact__Title">
          <h2>Contacto</h2>
          <hr/>
        </div>
        <form className="Contact__Form">
          <input type="text" placeholder="Nombre"/>
          <input type="text" placeholder="Correo Electrónico"/>
          <textarea placeholder="Mensaje"></textarea>
          <input type="submit" value="Enviar"/>
        </form>
      </div>
    </div>
  )
}

export default Contact