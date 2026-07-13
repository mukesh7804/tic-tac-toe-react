import React, {useState} from "react";
import Square from "./Square";
const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winnerLogic.length; i++) {
            const [a, b, c] = winnerLogic[i];
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return null;
    };
    


    const handleClick = (index) => {
        if (checkWinner() || state[index]) {
            return;
        }
        const copyState = [...state];
        copyState[index] = xIsNext ? "X" : "O";
        setState(copyState);
        setXIsNext(!xIsNext);
    }
  return (
    <div className="board-container"> 
    {checkWinner() ? (
        <><h2>Winner is: {checkWinner()}</h2><button onClick={() => setState(Array(9).fill(null))}>Play Again</button></>
    ) : (
        
        <>
        <h4>Player {xIsNext ? "X" : "O"} please make your move</h4><div className="board-row">
                      <Square value={state[0]} onClick={() => handleClick(0)} />
                      <Square value={state[1]} onClick={() => handleClick(1)} />
                      <Square value={state[2]} onClick={() => handleClick(2)} />
                  </div><div className="board-row">
                          <Square value={state[3]} onClick={() => handleClick(3)} />
                          <Square value={state[4]} onClick={() => handleClick(4)} />
                          <Square value={state[5]} onClick={() => handleClick(5)} />
                      </div><div className="board-row">
                          <Square value={state[6]} onClick={() => handleClick(6)} />
                          <Square value={state[7]} onClick={() => handleClick(7)} />
                          <Square value={state[8]} onClick={() => handleClick(8)} />
                      </div></>
    )}
        
    </div>
  );
};
export default Board;