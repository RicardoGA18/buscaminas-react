import React,{useEffect,useState,useContext} from 'react'
import AppContext from '../context/App/AppContext'
import Box from './Box'

const Table = () => {
  const {rankingGame,setRankingGame} = useContext(AppContext)

  useEffect(() => {
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
  },[])

  const printBoxes = () => {
    if(rankingGame.length){
      const divBoxes = []
      for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
          divBoxes.push((
            <Box
              row={i}
              col={j}
              key={`${i*10}${j}`}
            />
          ))
        }
      }
      return divBoxes
    }
  }

  return (
    <div className="Table" onContextMenu={e => {e.preventDefault()}}>
      {printBoxes()}
    </div>
  )
}

export default Table