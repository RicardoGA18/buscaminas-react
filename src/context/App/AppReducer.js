import {SET_ERROR,SET_USER} from '../types'

const AppReducer =  (state,action) => {
  const {payload,type} = action
  switch(type){
    case SET_ERROR:
      return {
        ...state,
        error: payload
      }
    case SET_USER:
      return {
        ...state,
        user: payload
      }
    default:
      return state
  }
}

export default AppReducer