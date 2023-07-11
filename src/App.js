import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const n = 8, m = 8;

  const [chessBoard, setChessBoard] = useState([])

  useEffect(() => {
    const result = []

    for (let i = 0; i < n; i++) {
      const row = Array.from({ length: m });

      result.push(row);
    }
    setChessBoard(result);
  }, []);

  return (
    <div className="App">
      {
        chessBoard.length > 0 &&
        chessBoard.map((row, rIndex) => {
          return (
            <div key={rIndex} className="row">
              {row.map((_, cIndex) => {
                return (
                  <div key={cIndex} className={`box ${(rIndex + cIndex) % 2 === 0 ? "black" : "white"}`}></div>)
              })}
            </div>
          )
        })}
    </div>);
}

export default App;
