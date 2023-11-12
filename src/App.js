import './App.css';
import Square from './Square';
import { useState  } from 'react';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

function clickHandler(index) {
  const nextSquares = squares.slice();
  nextSquares[index] = "X";
  setSquares(nextSquares);
}

  return (
    // because we have multiple elements being returned,
    // we need to wrap in <> which is shorthand for <React.Fragment>
    <>
      <div className="board-row">
        <Square value={squares[0]} handler={() => clickHandler(0)} />
        <Square value={squares[1]} handler={() => clickHandler(1)} />
        <Square value={squares[2]} handler={() => clickHandler(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handler={() => clickHandler(3)} />
        <Square value={squares[4]} handler={() => clickHandler(4)} />
        <Square value={squares[5]} handler={() => clickHandler(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handler={() => clickHandler(6)}/>
        <Square value={squares[7]} handler={() => clickHandler(7)}/>
        <Square value={squares[8]} handler={() => clickHandler(8)}/>
      </div>
    </>
  );
}

export default Board;
