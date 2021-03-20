import React, {useEffect,useContext} from 'react'
import AppContext from '../context/App/AppContext'
import Swal from 'sweetalert2'

const Observer = ({children}) => {
  const {error,setError} = useContext(AppContext)

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