import React,{useContext} from 'react'
import Nav from '../components/Nav'
import AppContext from '../context/App/AppContext'

const AccountView = () => {
  const {user} = useContext(AppContext)

  const setImage = () => {
    if(!user || !user.img){
      return <i className="fas fa-user fa-6x"></i>
    }else{
      return <img src={user.img} alt="imagen de perfil"/>
    }
  }

  return (
    <div className="HomeView">
      <Nav />
      <div className="l-container">
        <div className="l-contain AccountView">
          <div className="AccountView__ProfilePhoto">
            {setImage()}
          </div>
          <div className="AccountView__Title">
            <h1>Mi Perfil</h1>
          </div>
          <div className="AccountView__Info">
            <h1>Información Básica</h1>
            <h2>Nombre de usuario: {user.username}</h2>
            <h2>Email: {user.email}</h2>
          </div>
          {/* <div className="AccountView__Ranking">
            <h1>Historial de partidas (Ranking)</h1>
            <h2>Record: {user.last_scores}</h2>
          </div>
          <div className="AccountView__Multiplayer">
            <h1>Historial de partidas (Multiplayer)</h1>
            <h2>Record: {user.last_matches}</h2>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default AccountView