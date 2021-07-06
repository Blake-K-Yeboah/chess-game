import { useEffect, useState } from "react";

import Square from "./Square";

const Board = () => {
   const [board, setBoard] = useState([]);

   const whiteSquareIndexes = [
      0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22, 25, 27, 29, 31, 32, 34, 36, 38,
      41, 43, 45, 47, 48, 50, 52, 54, 57, 59, 61, 63,
   ];

   const pieceIndexes = {
      pawn: [8, 9, 10, 11, 12, 13, 14, 15],
      king: [4, 60],
      queen: [3, 59],
      bishop: [2, 5, 61, 58],
      knight: [1, 6, 62, 57],
      rook: [0, 7, 56, 63],
   };

   const generateBoard = () => {
      for (let i = 0; i < 64; i++) {
         const color = whiteSquareIndexes.includes(i) ? "light" : "dark";
         const piece = findPiece(i);
         const newSquare = { color: color, piece, id: i };
         setBoard((board) => [...board, newSquare]);
      }
   };

   const findPiece = (index) => {
      let piece = "";

      for (const [key, value] of Object.entries(pieceIndexes)) {
         if (value.includes(index)) {
            piece = key;
         }
      }
      return piece;
   };

   useEffect(() => {
      generateBoard();
   }, []);

   return (
      <div className="board">
         {board.length === 64
            ? board.map((square) => {
                 return (
                    <Square
                       color={square.color}
                       piece={square.piece}
                       key={square.id}
                    />
                 );
              })
            : ""}
      </div>
   );
};

export default Board;
