import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import AppContext from '../context/App/AppContext'
// Components
import LogNav from '../components/LogNav'
import {openModalCharge,closeModalCharge} from '../utils/charge'

const RegisterView = () => {
  const {register} = useContext(AppContext)
  const history = useHistory()
  const [user,setUser] = useState({
    email: '',
    username: '',
    img: null,
    pass1: '',
    pass2: '',
  })

  const manageSubmit = async e => {
    e.preventDefault()
    openModalCharge()
    const response = await register(user)
    closeModalCharge()
    if(response){
      history.push('/')
    }
  }

  const setImage = () => {
    if(!user.img || !user.img.length){
      return <i className="fas fa-user fa-6x"></i>
    }else{
      const urlImage = URL.createObjectURL(user.img[0])
      return <img src={urlImage} />
    }
  }

  const manageImage = e => {
    setUser({
      ...user,
      img: e.target.files
    })
  }

  const manageInput = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="LogView">
      <LogNav />
      <div className="LogView__Content">
        <div className="LogView__Form">
          <form className="LogForm" onSubmit={manageSubmit}>
            <div className="LogForm__Img">
              {setImage()}
            </div>
            <div className="LogForm__File">
              <input type="file" accept="image/png, image/jpeg" onChange={manageImage} files={user.img}/>
              <button><i className="fas fa-images"></i>Subir imagen</button>
            </div>
            <input className="LogForm__Input" type="email" placeholder="Correo Electrónico" name="email" onInput={manageInput} value={user.email} required/>
            <input className="LogForm__Input" type="text" placeholder="Nombre de Usuario" name="username" onInput={manageInput} value={user.username} pattern=".{2,}" required/>
            <input className="LogForm__Input" type="password" placeholder="Constraseña" name="pass1" onInput={manageInput} value={user.pass1} required/>
            <input className="LogForm__Input" type="password" placeholder="Confirmar Contraseña" name="pass2" onInput={manageInput} value={user.pass2} required/>
            <input type="submit" className="LogForm__Submit" value="Regístrate"/>
            <p className="LogForm__Link" onClick={() => {history.push('/iniciar-sesion')}}>¿Ya tienes una cuenta? Inicia Sesión</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterView