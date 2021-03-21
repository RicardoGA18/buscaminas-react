import React, {useEffect,useContext} from 'react'
import AppContext from '../context/App/AppContext'
import Swal from 'sweetalert2'
import {auth} from '../firebase'
import axios from 'axios'

const Observer = ({children}) => {
  const {error,setError,reviewUser} = useContext(AppContext)

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if(user){
        const {data} = await axios.get(`https://buscaminas-backend.herokuapp.com/api/users/${user.uid}`)
        reviewUser(data)
      }
      else{
        reviewUser(null)
      }
    })
  },[])

  const manageError = async () => {
    if(error) {
      await Swal.fire({
        title: 'Error',
        icon: 'error',
        html: `<span style="color: black">${error}</span>`
      })
      setError(null)
    }
  }

  useEffect(() => {
    manageError()
  },[error])

  return (
    <>
      {children}
    </>
  )
}

export default Observer