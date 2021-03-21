import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVePrBukbHwlbwKzaNx6Yr2m4DAkDc_eI",
  authDomain: "buscaminas-d70a8.firebaseapp.com",
  projectId: "buscaminas-d70a8",
  storageBucket: "buscaminas-d70a8.appspot.com",
  messagingSenderId: "322480303061",
  appId: "1:322480303061:web:89afb9c63ea3fac9c62b5c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const storage = firebase.storage()

export { auth , storage }