import React, {useContext,useEffect} from 'react'
import AppContext from '../context/App/AppContext'
import axios from 'axios'

const RankingBox = () => {
  const {ranking,setRanking} = useContext(AppContext)

  useEffect(() => {
    const getRanks = async () => {
      const {data} = await axios.get('http://127.0.0.1:5000/api/ranking')
      setRanking(data)
    }
    getRanks()
  },[])

  const manageMinute = (time) => {
    const oneMinute = 1000 * 60
    const currentMinute = Math.floor( time / oneMinute )

    if(currentMinute >= 10){
      return currentMinute
    }else{
      return `0${currentMinute}`
    }
  }

  const manageSecond = (time) => {
    const oneMinute = 1000 * 60
    const currentSeconds = Math.floor( (time % oneMinute) / 1000 )

    if(currentSeconds >= 10){
      return currentSeconds
    }else{
      return `0${currentSeconds}`
    }
  } 

  const setUserRank = () => {
    return ranking.map((user,idx) => {
      return (
        <div className="RankingBox__Item" key={idx}>
          <div className="RankingBox__Img">
            {user.img ? (<img src={user.img} alt={user.username} />) : (<i className="fas fa-user"></i>)}
          </div>
          <p className="RankingBox__Username">{user.username}</p>
          <p className="RankingBox__Time">{manageMinute(user.time)}:{manageSecond(user.time)}</p>
        </div>
      )
    })
  }

  return (
    <div className="RankingBox">
      <p className="RankingBox__Title">Ranking &#128293;</p>
      <div className="RankingBox__Content">
        {setUserRank()}
      </div>
    </div>
  )
}

export default RankingBox