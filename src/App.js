import './App.css';
import React, { useState } from 'react';
import Board from './components/Board';

function App() {

  const [isTurn, setTurn] = useState(true)
  const [player, setPlayer] = useState('X')
  const [winner, setWinner] = useState(null)
  const [boardState, setState] = useState([
    (Array(3).fill(' ')),
    (Array(3).fill(' ')),
    (Array(3).fill(' '))
  ])

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
        <Board player={player} setPlayer={setPlayer} 
               setWinner={setWinner} 
               isTurn={isTurn} setTurn={setTurn}
               boardState={boardState} setState={setState}
        />
        { winner ? winnerMessage() : null }
        <button className='reset-btn' onClick={() => reset()}>Reiniciar</button>
      </main>
    </>
  );
}

export default App;
