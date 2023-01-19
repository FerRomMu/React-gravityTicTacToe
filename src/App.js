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
  const [winner, setWinner] = useState(null)

  const cellClick = (r,c) => {
    if(!isTurn) return
    if(isInUse(r,c)) return
    changeState(r,c)
    setTurn(false)
    doGravity()
    setTimeout(() => {
      if(checkWin()) {
        setWinner(player)
      }
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
    return checkVertical() || checkHorizontal(boardState) || checkDiagonal()
  }

  const checkVertical = () => {
    let a = [[boardState[0][0],boardState[1][0],boardState[2][0]],
             [boardState[0][1],boardState[1][1],boardState[2][1]],
             [boardState[0][2],boardState[1][2],boardState[2][2]]]
    return checkHorizontal(a)
  }

  const checkHorizontal = (a) => {
    return a.some( arr => {
      return arr.every(v => v === 'X') ||
             arr.every(v => v === 'O')
    })
  }

  const checkDiagonal = () => {
    let d1 = [boardState[0][0],boardState[1][1],boardState[2][2]]
    let d2 = [boardState[0][2],boardState[1][1],boardState[2][0]]
    return d1.every(v => v === 'X') ||
           d1.every(v => v === 'O') ||
           d2.every(v => v === 'X') ||
           d2.every(v => v === 'O')
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
          return <div className={'cell'} onClick={() => cellClick(r, i) }>
              <p>{ cell }</p>
            </div>
        })
      }
      </div>
    )
  }
  
  const winnerMessage = () => {
    return (
      <div className='winner-message'>Ganador jugador { winner } </div>
    )
  }

  const reset = () => {
    setState([
      (Array(3).fill(' ')),
      (Array(3).fill(' ')),
      (Array(3).fill(' '))
    ])
    setWinner(null)
    setTurn(true)
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
        { winner ? winnerMessage() : null }
        <button className='reset-btn' onClick={() => reset()}>Reiniciar</button>
      </main>
    </>
  );
}

export default App;
