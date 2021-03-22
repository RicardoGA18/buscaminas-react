import React,{useEffect,useContext,useState} from 'react'
import bombGame from '../assets/bombGame.png'
import AppContext from '../context/App/AppContext'


const Box = ({row,col}) => {
  const {rankingGame,setRankingGame,rankingConfig,setRankingConfig} = useContext(AppContext)

  const revealBombs = () => {
    for(let i = 0; i < 16 ; i++){
      for(let j = 0; j < 16; j++){
        if(rankingGame[i][j].isbomb){
          rankingGame[i][j].liberado = true
        }
      }
    }
  }

  const isWin = () => {
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
    const freeBoxes = rankingGame.reduce((oneAcu,row) => {
      return oneAcu + row.reduce((twoAcu,box) => {
        if(box.liberado){
          return twoAcu + 1
        }else{
          return twoAcu
        }
      },0)
    },0)
    if( 16 *16 == freeBoxes && numBombs == safeBoxes){
      setRankingConfig({
        ...rankingConfig,
        isPlaying: false,
        win: true,
        lost: false,
        isFinish: true
      })
    }
  }

  const setSafe = (value,r,c) => {
    const newBoxes = rankingGame
    newBoxes[r][c].salvado = value
    setRankingGame(newBoxes)
  }

  const setLiberado = (r,c) => {
    const newBoxes = rankingGame
    newBoxes[r][c].liberado = true
    setRankingGame(newBoxes)
  }

  useEffect(()=> {
    if(rankingGame[row][col].liberado){
      if(setNumber(row,col) == 0 && !rankingGame[row][col].isbomb){
        for(let i = col-1;i <= col+1; i++){
          if(verifyBox(row-1,i)){
            if(!rankingGame[row-1][i].isbomb){
              setLiberado(row-1,i)
              setSafe(false,row-1,i)
            }
          }
        }
        if(verifyBox(row,col-1)){
          if(!rankingGame[row][col-1].isbomb){
            setLiberado(row,col-1)
            setSafe(false,row,col-1)
          }
        }
        if(verifyBox(row,col+1)){
          if(!rankingGame[row][col+1].isbomb){
            setLiberado(row,col+1)
            setSafe(false,row,col+1)
          }
        }
        for(let i = col-1; i <= col+1 ; i++){
          if(verifyBox(row+1,i)){
            if(!rankingGame[row+1][i].isbomb){
              setLiberado(row+1,i)
              setSafe(false,row+1,i)
            }
          }
        }
      }
    }
  },[rankingGame[row][col].liberado])

  const verifyBox = (row,col) => {
    if((row >= 0) && (row <= 15) && (col >= 0) && (col <= 15)){
      return true
    }else{
      return false
    }
  }

  const setNumber = (r,c) => {
    let bombs = 0
    for(let i = c - 1; i <= c + 1; i++){
      if(verifyBox(r-1,i)){
        if(rankingGame[r-1][i].isbomb){
          bombs++
        }
      }
    }
    if(verifyBox(r,c-1)){
      if(rankingGame[r][c-1].isbomb){
        bombs++
      }
    }
    if(verifyBox(r,c+1)){
      if(rankingGame[r][c+1].isbomb){
        bombs++
      }
    }
    for(let i = c - 1; i <= c + 1; i++){
      if(verifyBox(r+1,i)){
        if(rankingGame[r+1][i].isbomb){
          bombs++
        }
      }
    }
    return bombs
  }

  if(rankingConfig.isFinish){
    if(rankingGame[row][col].liberado){
      if(rankingGame[row][col].isbomb){
        return (
          <div className="Box is-bomb">
            <img src={bombGame} alt="bomb"/>
          </div>
        )
      }else{
        return (
          <div className="Box is-unblocked">
            <span>{setNumber(row,col) > 0 ? setNumber(row,col) : ''}</span>
          </div>
        )
      } 
    }else{
      if(rankingGame[row][col].salvado){
        return (
          <div className="Box is-safe" onContextMenu={e => {
            e.preventDefault()
          }}>
            <i className="fas fa-flag"></i>
          </div>
        )
      }else{
        return <div className="Box is-blocked" onContextMenu={e => {
          e.preventDefault()
        }}></div>
      }
    }
  }else{
    if(rankingGame[row][col].liberado){
      if(rankingGame[row][col].isbomb){
        return (
          <div className="Box is-bomb">
            <img src={bombGame} alt="bomb"/>
          </div>
        )
      }else{
        return (
          <div className="Box is-unblocked">
            <span>{setNumber(row,col) > 0 ? setNumber(row,col) : ''}</span>
          </div>
        )
      } 
    }else{
      if(rankingGame[row][col].salvado){
        return (
          <div className="Box is-safe" onContextMenu={e => {
            e.preventDefault()
            setSafe(false,row,col)
            setRankingConfig({
              ...rankingConfig,
              isPlaying: true
            })
            isWin()
          }}>
            <i className="fas fa-flag"></i>
          </div>
        )
      }else{
        return <div className="Box is-blocked" onContextMenu={e => {
          e.preventDefault()
          setSafe(true,row,col)
          setRankingConfig({
            ...rankingConfig,
            isPlaying: true
          })
          isWin()
        }}
        onClick={() => {
          setLiberado(row,col)
          if(rankingGame[row][col].isbomb){
            setRankingConfig({
              ...rankingConfig,
              isFinish: true,
              isPlaying: false,
              win: false,
              lost: true
            })
            revealBombs()
          }else{
            setRankingConfig({
              ...rankingConfig,
              isPlaying: true
            })
            isWin()
          }
        }}></div>
      }
    }
  }
}

export default Box