import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import AppContext from '../context/App/AppContext'

const PrivateRoute = ({options,component}) => {
  const {user} = useContext(AppContext)

  if(user){
    return (
      <Route {...options} component={component}/>
    )
  }else{
    return (
      <Redirect to="/" />
    )
  }
}

export default PrivateRoute