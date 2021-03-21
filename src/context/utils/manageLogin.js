import {auth} from '../../firebase'
import axios from 'axios'

const manageLogin = async user => {
  try {
    const responseAuth = await auth.signInWithEmailAndPassword(user.email,user.password)
    const infoUser = await axios.get(`https://buscaminas-backend.herokuapp.com/api/users/${responseAuth.user.uid}`)
    return infoUser.data
  } catch (error) {
    return error.message
  }
}

export default manageLogin