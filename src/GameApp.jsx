import React, { useEffect, useState } from 'react'
import './App.css'
import { gameSubject, initGame, resetGame } from './Game'
import Board from './Board'
import { useParams, useHistory } from 'react-router-dom'
import { db } from './firebase'

function GameApp() {
  const [board, setBoard] = useState([])
  const [isGameOver, setIsGameOver] = useState()
  const [result, setResult] = useState()
  const [position, setPosition] = useState()
  const [initResult, setInitResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  useEffect( () => {
    let subscribe
    async function init(){
     const res =  await initGame(id !== 'local' ? db.doc(`games/${id}`) : null)
      setInitResult(res)  
      setLoading(false)
      console.log(db.doc(`games/${id}`) )
     subscribe = gameSubject.subscribe((game) => {
        setBoard(game.board)
        setIsGameOver(game.isGameOver)
        setResult(game.result)
        setPosition(game.position)
      })
    }
    init()
    return () => subscribe && subscribe.unsubscribe()
  }, [id])

  if(loading){
    return 'Loading ...'
  }
  if(initResult == 'notfound'){
    return 'Game not found'
  }
  if (initResult == 'intruder'){
    return 'The game is alredy full'
  }
  return (
    <div className="app-container">
      {isGameOver && (
        <h2 className="vertical-text">
          GAME OVER
          <button onClick={resetGame}>
            <span className="vertical-text"> NEW GAME</span>
          </button>
        </h2>
      )}
      <div className="board-container">
        <Board board={board} position={position} />
      </div>
      {result && <p className="vertical-text">{result}</p>}
    </div>
  )
}

export default GameApp
