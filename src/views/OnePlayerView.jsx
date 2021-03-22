import React,{useContext,useState} from 'react'
import AppContext from '../context/App/AppContext'
// Components
import Nav from '../components/Nav'
import bombIcon from '../assets/bombIcon.png'
import Table from '../components/Table'
import Timer from '../components/Timer'
import RankingBox from '../components/RankingBox'

const OnePlayerView = () => {
  const {user,rankingGame,setRankingConfig,setRankingGame} = useContext(AppContext)

  const setImage = () => {
    if(!user || !user.img){
      return <i className="fas fa-user fa-2x"></i>
    }else{
      return <img src={user.img} alt={user.username} />
    }
  }

  const resetGame = () => {
    let newBoxes = []
    for(let row = 0; row < 16; row++){
      let newRow = []
      for(let col = 0; col < 16; col++){
        let box = {
          liberado: false,
          salvado: false,
          isbomb: false
        }
        let randomNumber = Math.random()
        if(randomNumber <= 0.2){
          box.isbomb = true
          
        }
        newRow.push(box)
      }
      newBoxes.push(newRow)
    }
    setRankingGame(newBoxes)
  }

  const getNumBombs = () => {
    const numBombs = rankingGame.reduce((oneAcu,row) => {
      return oneAcu + row.reduce((twoAcu,box) => {
        if(box.isbomb){
          return twoAcu + 1
        }else{
          return twoAcu
        }
      },0)
    },0)
    const safeBoxes = rankingGame.reduce((oneAcu,row) => {
      return oneAcu + row.reduce((twoAcu,box) => {
        if(box.salvado){
          return twoAcu + 1
        }else{
          return twoAcu
        }
      },0)
    },0)
    const newNumber = numBombs - safeBoxes
    if(newNumber > 0){
      return newNumber
    }else{
      return 0
    }
  }

  return (
    <div className="HomeView">
      <Nav />
      <div className="Ranking l-container">
        <div className="l-contain">
          <RankingBox />
          <div className="Ranking__Title">
            <h2>Ranking</h2>
            <div></div>
          </div>
          <div className="Ranking__Info">
            <div className="Ranking__Img">
              {setImage()}
            </div>
            <p>{user.username}</p>
          </div>
          <p className="Ranking__Best">Mejor Tiempo: 01 : 22</p>
          <div className="Ranking__Content">
            <div className="Ranking__GameInfo">
              <Timer />
              <div className="Ranking__Button-Mines">
                <button className="Ranking__Button" onClick={() => {
                  setRankingConfig({
                    isPlaying: false,
                    isFinish: false,
                    win: false,
                    lost: false,
                    time: 0
                  })
                  resetGame()
                }}>
                  <i className="fas fa-redo-alt fa-2x"></i>
                </button>
                <div className="Ranking__Mines">
                  <img src={bombIcon} alt="bombIcon"/>
                  <p>{getNumBombs()}</p>
                </div>
              </div>
            </div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnePlayerView