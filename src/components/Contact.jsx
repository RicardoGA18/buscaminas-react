import React,{useState} from 'react'
import {openModalCharge,closeModalCharge} from '../utils/charge'
import axios from 'axios'
import Swal from 'sweetalert2'

const Contact = () => {
  const [feedback,setFeedback] = useState({
    name: '',
    email: '',
    message: ''
  })

  const manageInput = e => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    })
  }

  const manageSubmit = async e => {
    try {
      e.preventDefault()
      openModalCharge()
      const {data} = await axios.post('https://buscaminas-backend.herokuapp.com/api/feedback',feedback)
      closeModalCharge()
      if(data.response){
        await Swal.fire({
          title: 'Listo!',
          icon: 'success',
          html: `<span style="color: black">Mensaje Enviado</span>`
        })
        setFeedback({
          name: '',
          email: '',
          message: ''
        })
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        icon: 'error',
        html: `<span style="color: black">${error.message}</span>`
      })
    }
  } 

  return (
    <div className="Contact l-container">
      <div className="l-contain">
        <div className="Contact__Title">
          <h2>Contacto</h2>
          <hr/>
        </div>
        <form className="Contact__Form" onSubmit={manageSubmit}>
          <input type="text" placeholder="Nombre" name="name" pattern=".{3,}" required onInput={manageInput} value={feedback.name}/>
          <input type="email" placeholder="Correo Electrónico" name="email" required  onInput={manageInput} value={feedback.email}/>
          <textarea placeholder="Mensaje" name="message" required onInput={manageInput} value={feedback.message}></textarea>
          <input type="submit" value="Enviar"/>
        </form>
      </div>
    </div>
  )
}

export default Contact