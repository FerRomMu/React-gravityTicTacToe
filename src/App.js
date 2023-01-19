import './App.css';
import React, { useState } from 'react';

function App() {

  const [isTurn, setTurn] = useState(true)
  const [player, setPlayer] = useState('X')
  const [boardState, setState] = useState([
    (Array(3).fill(' ')),
    (Array(3).fill(' ')),
    (Array(3).fill(' '))
  ])

  const cellClick = (r,c) => {
    if(!isTurn) return
    if(isInUse(r,c)) return
    changeState(r,c)
    setTurn(false)
    doGravity()
    setTimeout(() => {
      if(checkWin()) return 
      else { 
        setTurn(true)
        setPlayer(player === 'X' ? 'O' : 'X')
      }
    }, 300)
  }

  const isInUse = (r,c) => {
    return boardState[r][c] !== ' '
  }

  const doGravity = () => {
    let board = [...boardState]
    fall(board,2)
    fall(board,1)
    setState(board)
  }

  const fall = (b, j) => {
    b[j].forEach( (v,i, a) => {
      if (v === ' ' &&
      b[j-1][i] !== ' ') {
        a[i] = b[j-1][i]
        b[j-1][i] = ' '
      }
    })
  }

  const checkWin = () => {
    return false
  }

  const changeState = (r,c) => {
    let newState = [...boardState]
    newState[r][c] = player
    setState(newState)
  }

  const drawBoard = () => {
    return (
      <section className="board">
        { boardState.map((row, i) => {
          return drawRow(row, i)
        })}
      </section>
    )
  }

  const drawRow = (f, r) => {
    return (
      <div className='row'> { 
        f.map((cell, i) => {
          return <div className='cell' onClick={() => cellClick(r, i) }>
              <p>{ cell }</p>
            </div>
        })
      }
      </div>
    )
  }
  
  return (
    <>
      <header className='header'>
        <h1 className='title'>Gravity TicTacToe</h1>
      </header>
      <main>
        <h2 className='turn-message'> 
          { isTurn? 
              "Es turno de " + player : " Resolviendo turno... "
          }
        </h2>
        { drawBoard() }
      </main>
    </>
  );
}

export default App;
