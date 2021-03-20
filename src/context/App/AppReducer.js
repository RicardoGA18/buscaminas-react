import {SET_ERROR} from '../types'

const AppReducer =  (state,action) => {
  const {payload,type} = action
  switch(type){
    case SET_ERROR:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}

export default AppReducer