import './App.css';
import React, { useState } from 'react';
import Board from './components/Board';
import WinnerMessage from './components/WinnerMessage.jsx';
import ResetBtn from './components/ResetBtn';

function App() {

  const [isTurn, setTurn] = useState(true)
  const [player, setPlayer] = useState('X')
  const [winner, setWinner] = useState(null)
  const [boardState, setState] = useState([
    (Array(3).fill(' ')),
    (Array(3).fill(' ')),
    (Array(3).fill(' '))
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
        <Board player={player} setPlayer={setPlayer} 
               setWinner={setWinner} 
               isTurn={isTurn} setTurn={setTurn}
               boardState={boardState} setState={setState}
        />
        { winner && <WinnerMessage winner={ winner }/>}
        <ResetBtn setState={setState} setWinner={setWinner} setTurn={setTurn}/>
      </main>
    </>
  );
}

export default App;
