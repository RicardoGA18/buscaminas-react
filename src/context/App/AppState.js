// React Context
import React, {useReducer} from 'react'
import AppReducer from './AppReducer'
import AppContext from './AppContext'

// Auth
import {auth} from '../../firebase'

// Types
import {SET_ERROR,SET_USER} from '../types'

// Request Functions
import manageRegister from '../utils/manageRegister'
import manageLogin from '../utils/manageLogin'

const AppState = (props) => {
  const INITIAL_STATE = {
    user: null,
    error: null,
  }

  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE)

  const logout = async () => {
    try {
      await auth.signOut()
      dispatch({
        type: SET_USER,
        payload: null
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
  }

  const login = async user => {
    const response = await manageLogin(user)
    if(typeof response === 'string'){
      dispatch({
        type: SET_ERROR,
        payload: response
      })
      return false
    }else if(typeof response === 'object'){
      dispatch({
        type: SET_USER,
        payload: response
      })
      return true
    }else{
      dispatch({
        type: SET_ERROR,
        payload: 'Comportamiento no esperado en login'
      })
      return false
    }
  }

  const setError = (error) => {
    dispatch({
      type: SET_ERROR,
      payload: error
    })
  }

  const reviewUser = user => {
    dispatch({
      type: SET_USER,
      payload: user
    })
  }

  const register = async user => {
    const response = await manageRegister(user)
    if(typeof response === 'string'){
      dispatch({
        type: SET_ERROR,
        payload: response
      })
      return false
    }else if(typeof response === 'object'){
      dispatch({
        type: SET_USER,
        payload: response
      })
      return true
    }else{
      dispatch({
        type: SET_ERROR,
        payload: 'Comportamiento no esperado en register'
      })
      return false
    }
  }

  return (
    <AppContext.Provider value={{ 
      user: state.user,
      error: state.error,
      setError,
      register,
      reviewUser,
      logout,
      login,
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState