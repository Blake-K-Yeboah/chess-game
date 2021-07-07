import { useEffect, useState } from "react";

import Square from "./Square";

const Board = () => {
   const [board, setBoard] = useState([]);

   const whiteSquareIndexes = [
      0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22, 25, 27, 29, 31, 32, 34, 36, 38,
      41, 43, 45, 47, 48, 50, 52, 54, 57, 59, 61, 63,
   ];

   const pieceIndexes = {
      pawn: [8, 9, 10, 11, 12, 13, 14, 15, 48, 49, 50, 51, 52, 53, 54, 55],
      king: [4, 60],
      queen: [3, 59],
      bishop: [2, 5, 61, 58],
      knight: [1, 6, 62, 57],
      rook: [0, 7, 56, 63],
   };

   const generateBoard = () => {
      for (let i = 0; i < 64; i++) {
         const boardColor = whiteSquareIndexes.includes(i) ? "light" : "dark";
         const piece = findPiece(i);
         const newSquare = {
            boardColor: boardColor,
            piece,
            id: i,
            color: i < 16 ? "dark" : i > 47 ? "light" : null,
            hasMoved: false,
         };
         setBoard((board) => [...board, newSquare]);
      }
   };

   const findPiece = (index) => {
      let piece = null;

      for (const [key, value] of Object.entries(pieceIndexes)) {
         if (value.includes(index)) {
            piece = key;
         }
      }
      return piece;
   };

   useEffect(() => {
      generateBoard();
      // eslint-disable-next-line
   }, []);

   const [turn, setTurn] = useState("light");
   const [activePiece, setActivePiece] = useState(null);

   return (
      <div className="board">
         {board.length === 64
            ? board.map((square) => {
                 return (
                    <Square
                       square={square}
                       key={square.id}
                       turn={turn}
                       setTurn={setTurn}
                       activePiece={activePiece}
                       setActivePiece={setActivePiece}
                       board={board}
                       setBoard={setBoard}
                    />
                 );
              })
            : ""}
      </div>
   );
};

export default Board;
