import './App.css';
import React, { useState } from 'react';

function App() {

  let [isTurn, setTurn] = useState(true)
  let [player, setPlayer] = useState('X')

  const cellClick = (r,c) => {
    if(!isTurn) return
    changeState(r,c)
    setTurn(false)
    doGravity()
    if(checkWin()) return 
    else { 
      setTurn(true)
      setPlayer(player === 'X' ? 'O' : 'X')
    }
  }

  const doGravity = () => {

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

  const [boardState, setState] = useState([
                (Array(3).fill('  ')),
                (Array(3).fill('  ')),
                (Array(3).fill('  '))
              ])
  
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
