import { useEffect, useState } from "react";

const Square = ({
   square,
   turn,
   setTurn,
   activePiece,
   setActivePiece,
   setBoard,
   board,
}) => {
   const { boardColor, piece, color, id, hasMoved, isActiveLocation } = square;

   const [pieceDisplay, setPieceDisplay] = useState(null);
   const [squareActive, setSquareActive] = useState(false);

   useEffect(() => {
      setSquareActive(square === activePiece);
   }, [board, activePiece, square]);

   useEffect(() => {
      switch (piece) {
         case "king":
            setPieceDisplay("&#9812");
            break;
         case "queen":
            setPieceDisplay("&#9813");
            break;
         case "pawn":
            setPieceDisplay("&#9817");
            break;
         case "bishop":
            setPieceDisplay("&#9815");
            break;
         case "knight":
            setPieceDisplay("&#9816");
            break;
         case "rook":
            setPieceDisplay("&#9814");
            break;
         case "activeLocation":
            setPieceDisplay('<div class="circle"></div>');
            break;
         default:
            setPieceDisplay("");
      }
   }, [piece, color]);

   const squareClickHandler = () => {
      if (!activePiece && color === turn) {
         setSquareActive(true);
         setActivePiece(square);
         switch (piece) {
            case "pawn":
               if (!hasMoved) {
                  const firstPlaceId = color === "light" ? id - 8 : id + 8;
                  const secondPlaceId = color === "light" ? id - 16 : id + 16;
                  let newBoard = board;
                  newBoard[firstPlaceId] = {
                     ...board[firstPlaceId],
                     piece: "activeLocation",
                  };
                  newBoard[secondPlaceId] = {
                     ...board[secondPlaceId],
                     piece: "activeLocation",
                  };
                  setBoard(newBoard);
               } else {
                  const firstPlaceId = color === "light" ? id - 8 : id + 8;
                  const diagonalLeftPlaceId =
                     color === " light"
                        ? board.indexOf(square) + 9
                        : board.indexOf(square) - 9;
                  const diagonalRightPlaceId =
                     color === " light" ? id - 7 : id + 7;
                  let newBoard = board;
                  newBoard[firstPlaceId] = {
                     ...board[firstPlaceId],
                     piece: "activeLocation",
                  };
                  if (board[diagonalLeftPlaceId].piece !== "") {
                     newBoard[diagonalLeftPlaceId] = {
                        ...board[diagonalLeftPlaceId],
                        isActiveLocation: "true",
                     };
                  }
                  setBoard(newBoard);
               }
               break;
            case "knight":
               if (!hasMoved) {
                  const firstPlaceId = color === "light" ? id - 15 : id + 15;
                  const secondPlaceId = color === "light" ? id - 17 : id + 17;
                  const newBoard = board;
                  newBoard[firstPlaceId] = {
                     ...board[firstPlaceId],
                     piece: "activeLocation",
                  };
                  newBoard[secondPlaceId] = {
                     ...board[secondPlaceId],
                     piece: "activeLocation",
                  };
                  setBoard(newBoard);
               }
               break;
            default:
               console.log("hi");
         }
      } else if (activePiece && piece === "activeLocation") {
         const activePieceIndex = board.indexOf(activePiece);
         const newBoard = board;
         newBoard[activePieceIndex] = {
            ...board[activePieceIndex],
            color: null,
            piece: "",
            id: activePiece.id,
         };
         newBoard[id] = {
            ...activePiece,
            id,
            boardColor: board[id].boardColor,
            hasMoved: true,
         };
         setBoard(
            newBoard.map((square) => {
               if (square.piece === "activeLocation") {
                  return { ...square, piece: " " };
               } else {
                  return square;
               }
            })
         );
         setSquareActive(false);
         setActivePiece("");
         setTurn(turn === "light" ? "dark" : "light");
      }
   };

   return (
      <div
         className={`square ${boardColor} ${squareActive ? "active" : ""}`}
         id={id}
         onClick={squareClickHandler}
      >
         <span
            className={`piece ${color}`}
            dangerouslySetInnerHTML={{ __html: pieceDisplay }}
         ></span>
         {isActiveLocation ? <div className="circle"></div> : ""}
      </div>
   );
};

export default Square;
