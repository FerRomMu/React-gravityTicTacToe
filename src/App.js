import './App.css';

const tablero = Array(3).fill(Array(3).fill('  '))

const drawFila = (f) => {
  return <div className='fila'> { 
    f.map((celda) => {
      return <div className='celda'><p>{celda}</p></div>
    })
  }
  </div>
}

const drawTablero = () => {
  return (
    <section className="tablero">
      { tablero.map((fila) => {
        return drawFila(fila)
      })}
    </section>
  )
}

function App() {
  return (
    <>
      <header className='header'>
        <h1 className='title'>Gravity TicTacToe</h1>
      </header>
      <main>
        { drawTablero() }
      </main>
    </>
  );
}

export default App;
