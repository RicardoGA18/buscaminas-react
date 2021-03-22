import React,{useContext,useState,useEffect,useRef} from 'react'
import AppContext from '../context/App/AppContext'
import Swal from 'sweetalert2'
import lose from '../assets/lose.png'
import win from '../assets/win.png'
import {openModalCharge,closeModalCharge} from '../utils/charge'
import axios from 'axios'

const Timer = () => {
  const {rankingConfig,setRankingConfig,user,ranking,setRanking} = useContext(AppContext)

  let interval = useRef()

  const startTimer = () => {
    const firstTime = new Date().getTime()
    interval.current = setInterval(() => {
      const currentTime = new Date().getTime()
      const distance = currentTime - firstTime

      if(!rankingConfig.isFinish){
        setRankingConfig({
          ...rankingConfig,
          time: distance
        })
      }else{
        clearInterval(interval.current)
      }
    }, 1000)
  }

  const manageMinute = () => {
    const oneMinute = 1000 * 60
    const currentMinute = Math.floor( rankingConfig.time / oneMinute )

    if(currentMinute >= 10){
      return currentMinute
    }else{
      return `0${currentMinute}`
    }
  }

  const manageSecond = () => {
    const oneMinute = 1000 * 60
    const currentSeconds = Math.floor( (rankingConfig.time % oneMinute) / 1000 )

    if(currentSeconds >= 10){
      return currentSeconds
    }else{
      return `0${currentSeconds}`
    }
  } 

  useEffect(() => {
    setRankingConfig({
      isPlaying: false,
      isFinish: false,
      win: false,
      lost: false,
      time: 0
    })
  }, [])

  const manageWin = async () => {
    try {
      openModalCharge()
      const response = await axios.post('https://buscaminas-backend.herokuapp.com/api/ranking',{
        id: user.id,
        time: rankingConfig.time,
        img: user.img,
        username: user.username
      })
      closeModalCharge()
      Swal.fire({
        title: 'Felicidades',
        html: `<span style="color: black">Ganaste, sigue así!</span>`,
        imageUrl: win,
        imageWidth: 100,
        imageHeight: 88,
        imageAlt: 'Ganaste',
      })
      setRankingConfig({
        ...rankingConfig,
        win: false,
        lost: false,
      })
    } catch (error) {
      await Swal.fire({
        title: 'Error',
        icon: 'error',
        html: `<span style="color: black">${error.message}</span>`
      })
    }
    
  }

  useEffect(() => {
    if(rankingConfig.isPlaying){
      startTimer()
    }else{
      clearInterval(interval.current)
      if(rankingConfig.lost){
        Swal.fire({
          title: 'Perdiste',
          html: `<span style="color: black">Lo siento, será la próxima.</span>`,
          imageUrl: lose,
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: 'Perdiste',
        })
        setRankingConfig({
          ...rankingConfig,
          win: false,
          lost: false,
        })
      }else if(rankingConfig.win){
        manageWin()
      }
    }
    return () => {
      clearInterval(interval.current)
    }
  }, [rankingConfig.isPlaying])

  return (
    <div className="Ranking__Timer">
      <i className="fas fa-stopwatch fa-2x"></i>
      <p>{manageMinute()} : {manageSecond()}</p>
    </div>
  )
}

export default Timer