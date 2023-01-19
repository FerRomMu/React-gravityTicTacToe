import Row from './Row';

//Componente de tablero
const Board = ({player, setPlayer, setWinner, isTurn, setTurn, boardState, setState}) => {

  const cellClick = (r,c) => {
    if(!isTurn) return
    if(isInUse(r,c)) return
    setTurn(false)
    changeState(r,c)
    setTimeout(() => {
      doGravity()
      if(checkWin()) {
        setWinner(player)
      }
      else {
        setPlayer(player === 'X' ? 'O' : 'X')
        setTurn(true)
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

return (
    <div>
      <section className="board">
        { boardState.map((row, i) => {
          return <Row row={row} rowIndex={i} onClick={cellClick}/>
        })}
      </section>
    </div>
  )
}

export default Board