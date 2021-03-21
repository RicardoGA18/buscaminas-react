import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import AppContext from '../context/App/AppContext'

const LogRoute = ({options,component}) => {
  const {user} = useContext(AppContext)
  
  if(user){
    return (
      <Redirect to="/" />
    )
  }else{
    return (
      <Route {...options} component={component}/>
    )
  }
}

export default LogRoute