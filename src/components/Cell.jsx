const Cell = ({cell, rowIndex, cellIndex, onClick}) => {
    return (
      <div className={'cell'} onClick={() => onClick(rowIndex, cellIndex)}>
          <p>{ cell }</p>
      </div>
    )
  }

export default Cell