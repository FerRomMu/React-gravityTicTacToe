import Cell from "./Cell"

const Row = ({row, rowIndex, onClick}) => {
    return (
      <div className='row'> { 
          row.map((cell, i) => {
            return <Cell cell={cell} rowIndex={rowIndex} cellIndex={i} onClick={onClick}/>
          })
        }
      </div>
    )
  }

export default Row