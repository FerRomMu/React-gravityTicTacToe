import './App.css';

const board = [
                (Array(3).fill('  ')),
                (Array(3).fill('  ')),
                (Array(3).fill('  '))
              ]
const isTurn = true
const player = 'X'


const drawRow = (f, r) => {
  return <div className='row'> { 
    f.map((cell, i) => {
      return <div className='cell' onClick={() => cellClick(r, i) }><p>{cell}</p></div>
    })
  }
  </div>
}

const drawBoard = () => {
  return (
    <section className="board">
      { board.map((row, i) => {
        return drawRow(row, i)
      })}
    </section>
  )
}

const cellClick = (r,c) => {
  if(!isTurn) return
  board[r][c] = player
}

function App() {
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
