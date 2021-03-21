import {auth , storage} from '../../firebase'
import axios from 'axios'

const manageRegister = async user => {
  try {
    if(user.pass1 !== user.pass2){
      return 'Las contraseñas no coinciden.'
    }
    const responseAuth = await auth.createUserWithEmailAndPassword(user.email,user.pass1)
    let url
    if(!user.img || !user.img.length){
      url = ''
    }else{
      const refStorage = storage.ref(`avatars/${user.img[0].name}`)
      url = await subirAvatar(user.img[0],refStorage)
    }
    const newUser = {
      email: user.email,
      username: user.username,
      id: responseAuth.user.uid,
      img: url
    }
    const responseBack = await axios.post('https://buscaminas-backend.herokuapp.com/api/users',newUser)
    console.log(responseBack.data)
    return responseBack.data
  } catch (error) {
    return error.message
  }
}

const subirAvatar = (imagen,refStorage) => {
  return new Promise((resolve, reject) => {
    const tarea = refStorage.put(imagen)
    tarea.on(
      'state_changed',
      () => {},//aqui iría una función que observa la subida de mi archivo
      (error) => {reject(error)}, //aqui manejamos si es que recibimos un error, por eso hace un reject
      () => { //aqui ya podemos inspeccionar cuando el archivo ha terminado de subirse a firebase
        tarea.snapshot.ref.getDownloadURL()
        .then(urlImagen => resolve(urlImagen))
      }
    )
  })
}

export default manageRegister