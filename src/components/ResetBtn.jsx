const ResetBtn = ({ setState, setWinner, setTurn }) => {

  const reset = () => {
    setState([
      (Array(3).fill(' ')),
      (Array(3).fill(' ')),
      (Array(3).fill(' '))
    ])
    setWinner(null)
    setTurn(true)
  }

  return <button className='reset-btn' onClick={() => reset()}>Reiniciar</button>
}

export default ResetBtn