import {SET_ERROR,SET_USER,SET_RANKING,SET_RANKING_CONFIG,SET_RANK} from '../types'

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
    case SET_RANKING:
      return {
        ...state,
        rankingGame: payload
      }
    case SET_RANKING_CONFIG:
      return {
        ...state,
        rankingConfig: payload
      }
    case SET_RANK:
      return {
        ...state,
        ranking: payload
      }
    default:
      return state
  }
}

export default AppReducer