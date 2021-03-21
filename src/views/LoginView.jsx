import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import AppContext from '../context/App/AppContext'
// Components
import LogNav from '../components/LogNav'
import {openModalCharge, closeModalCharge} from  '../utils/charge'

const LoginView = () => {
  const {login} = useContext(AppContext)
  const history = useHistory()
  const [user,setUser] = useState({
    email: '',
    password: ''
  })

  const manageInput = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const manageSubmit = async e => {
    e.preventDefault()
    openModalCharge()
    const response = await login(user)
    closeModalCharge()
    if(response){
      history.push('/')
    }
  }

  return (
    <div className="LogView">
      <LogNav />
      <div className="LogView__Content">
        <div className="LogView__Form">
          <form className="LogForm" onSubmit={manageSubmit}>
            <input className="LogForm__Input" type="email" placeholder="Correo Electrónico" name="email" onInput={manageInput} value={user.email} required/>
            <input className="LogForm__Input" type="password" placeholder="Contraseña" name="password" onInput={manageInput} value={user.password} required/>
            <input className="LogForm__Submit" type="submit" value="Iniciar Sesión"/>
            <p className="LogForm__Link" onClick={() => {history.push('/registro')}}>¿Aún no tienes una cuenta? Regístrate</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginView