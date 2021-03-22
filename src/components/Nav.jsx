import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
// Context
import {useContext} from 'react'
import AppContext from '../context/App/AppContext'
// Assets
import logo from '../assets/logo.png'
import desktop from '../assets/desktop.png'
// Carousel
import ModalCarousel from './ModalCarousel'
import Swal from 'sweetalert2'

const Nav = () => {
  const {user,logout} = useContext(AppContext)
  const [modal,setModal] = useState({
    open: false,
    mobile: false
  })
  const history = useHistory()

  const setDesktopMessage = () => {
    Swal.fire({
      title: 'Whoops!',
      text: 'Por el momento el juego solo funciona en desktop, cambia de dispositivo para comenzar a jugar.',
      imageUrl: desktop,
      imageWidth: 100,
      imageHeight: 88.89,
      imageAlt: 'Desktop',
    })
  }

  const manageLogout = async () => {
    const respond = await Swal.fire({
      title: '¿Seguro?',
      html: '<span style="color: black">Cerrarás sesión</span>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    })
    if(respond.isConfirmed){
      logout()
    }
  }

  const manageUser = () => {
    if(user){
      return (
        <>
          <div className="Nav__User" onClick={() => {history.push('/perfil')}}>
            {user.img
              ? (<div className="Nav__UserImg"><img src={user.img} alt={`Foto de perfil de ${user.username}`} /></div>)
              : (<i className="fas fa-user"></i>)}
            <p>{user.username}</p>
          </div>
          <div className="Nav__LogOut">
            <button onClick={manageLogout}>
              <i className="fas fa-sign-out-alt fa-2x"></i>
            </button>
          </div>
          <div className="Nav__Play">
            <button onClick={() => {history.push('/jugar')}}>Jugar</button>
          </div>
        </>
      )
    }else{
      return (
        <>
          <div className="Nav__Item" onClick={() => {history.push('/iniciar-sesion')}}>
            <p>Mi cuenta</p>
          </div>
          <div className="Nav__Play">
            <button onClick={() => {history.push('/iniciar-sesion')}}>Jugar</button>
          </div>
        </>
      )
    }
  }

  const manageMobUser = () => {
    if(user){
      return (
        <>
          <div className="NavMob__User" onClick={() => {history.push('/perfil')}}>
            {user.img
              ? (<div className="NavMob__UserImg"><img src={user.img} alt={`Foto de perfil de ${user.username}`} /></div>)
              : (<i className="fas fa-user"></i>)}
          </div>
          <div className="NavMob__LogOut">
            <button onClick={manageLogout}><i className="fas fa-sign-out-alt"></i></button>
          </div>
        </>
      )
    }else{
      return <></>
    }
  }

  const manageDrop = (e) => {
    const dropbox = document.querySelector('.NavMob__Drop')
    const BgNav = document.querySelector('.BgNav')
    if(e.target.checked){
      dropbox.style.maxHeight= '100px'
      dropbox.style.border = 'border: 1px solid rgba(255,255,255,.10)'
      BgNav.style.display = 'block'
    }else{
      dropbox.style.maxHeight= '0px'
      dropbox.style.border = 'none'
      BgNav.style.display = 'none'
    }
  }

  const resetBg = () => {
    const dropbox = document.querySelector('.NavMob__Drop')
    const BgNav = document.querySelector('.BgNav')
    const checkDrop = document.getElementById('checkDrop')
    dropbox.style.maxHeight= '0px'
    dropbox.style.border = 'none'
    BgNav.style.display = 'none'
    checkDrop.checked = false
  }

  return (
    <>
      <div className="Nav l-container">
        <div className="l-contain">
          <Link to="/">
            <div className="Nav__Logo">
              <img src={logo} alt={'Logo BuscaminasPVP'}/>
              <p>BuscaminasPVP</p>
            </div>
          </Link>
          <div className="Nav__List">
            <div className="Nav__Item" onClick={() => {history.push('/')}}>
              <p>Inicio</p>
            </div>
            <div className="Nav__Item" onClick={() => {setModal({open: true, mobile: false})}}>
              <p>¿Cómo Jugar?</p>
            </div>
            {manageUser()}
          </div>
        </div>
      </div>
      <nav className="NavMob l-container">
        <div className="NavMob__Drop">
          <p onClick={() => {
            resetBg()
            history.push('/')
          }}>Inicio</p>
          <p onClick={() => {
            resetBg()
            setModal({open: true, mobile: true})
          }}>¿Cómo Jugar?</p>
        </div>
        <div className="l-contain">
          <Link to="/">
            <div className="NavMob__Logo">
              <img src={logo} alt={'Logo BuscaminasPVP'}/>
              <p>BuscaminasPVP</p>
            </div>
          </Link>
          <div className="NavMob__Buttons">
            {manageMobUser()}
            <div className="NavMob__Play">
              <button onClick={setDesktopMessage}>Jugar</button>
            </div>
            <div className="NavMob__Bars">
              <div className="NavMob__Check">
                <input type="checkbox" id="checkDrop" onClick={manageDrop}/>
                <i className="fas fa-bars fa-2x"></i>
                <i className="fas fa-times fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="BgNav" onClick={resetBg}></div>
      </nav>
      <ModalCarousel 
        open={modal.open}
        onClose={() => {setModal({
          open: false,
          mobile: false
        })}}
        onStart={()=>{setModal({
          open: false,
          mobile: false
        })}}
        mobile={modal.mobile}
      />
    </>
  )
}

export default Nav