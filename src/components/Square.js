import { useEffect, useState } from "react";

// Import Piece Move IDS from moves.js
import { knightIds, diagonalIds } from "../moves";

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
    const [squareActive, setSquareActive] = useState(activePiece === square);

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

    const markActiveLocations = () => {
        switch (piece) {
            case "pawn":
                const firstPlaceId = color === "light" ? id - 8 : id + 8;
                const diagonalLeftPlaceId = color === "light" ? id - 9 : id + 9;
                const diagonalRightPlaceId =
                    color === "light" ? id - 7 : id + 7;
                let newBoard = [...board];

                if (!hasMoved) {
                    const secondPlaceId = color === "light" ? id - 16 : id + 16;
                    newBoard[secondPlaceId] = {
                        ...board[secondPlaceId],
                        piece: "activeLocation",
                    };
                }

                if (!board[firstPlaceId].piece) {
                    newBoard[firstPlaceId] = {
                        ...board[firstPlaceId],
                        piece: "activeLocation",
                    };
                }

                if (
                    board[diagonalLeftPlaceId].piece &&
                    board[diagonalLeftPlaceId].color !== turn
                ) {
                    newBoard[diagonalLeftPlaceId] = {
                        ...board[diagonalLeftPlaceId],
                        isActiveLocation: "true",
                    };
                }

                if (
                    board[diagonalRightPlaceId].piece &&
                    board[diagonalRightPlaceId].color !== turn
                ) {
                    newBoard[diagonalRightPlaceId] = {
                        ...board[diagonalRightPlaceId],
                        isActiveLocation: "true",
                    };
                }

                setBoard(newBoard);
                break;
            case "knight":
                if (!hasMoved) {
                    const firstPlaceId = color === "light" ? id - 15 : id + 15;
                    const secondPlaceId = color === "light" ? id - 17 : id + 17;
                    const thirdPlaceId =
                        id === 62 ? 52 : id === 57 ? 51 : id === 6 ? 12 : 11;
                    let newBoard = [...board];
                    newBoard[firstPlaceId] = {
                        ...board[firstPlaceId],
                        piece: "activeLocation",
                    };
                    newBoard[secondPlaceId] = {
                        ...board[secondPlaceId],
                        piece: "activeLocation",
                    };
                    if (!board[thirdPlaceId].piece) {
                        newBoard[thirdPlaceId] = {
                            ...board[thirdPlaceId],
                            piece: "activeLocation",
                        };
                    }
                    if (
                        board[thirdPlaceId].piece &&
                        board[thirdPlaceId].color !== turn
                    ) {
                        newBoard[thirdPlaceId] = {
                            ...board[thirdPlaceId],
                            isActiveLocation: "true",
                        };
                    }
                    setBoard(newBoard);
                } else {
                    let newBoard = [...board];
                    knightIds[id + 1].forEach((place) => {
                        const placeId = place - 1;
                        if (
                            board[placeId].piece &&
                            board[placeId].color !== turn
                        ) {
                            newBoard[placeId] = {
                                ...board[placeId],
                                isActiveLocation: "true",
                            };
                        } else if (!board[placeId].piece) {
                            newBoard[placeId] = {
                                ...board[placeId],
                                piece: "activeLocation",
                            };
                        }
                    });
                    setBoard(newBoard);
                }
                break;
            case "bishop":
                let newestBoard = [...board];
                Object.values(diagonalIds[id + 1]).forEach((placeIds) => {
                    let blocked = false;
                    let i = 0;
                    while (i < placeIds.length && !blocked) {
                        const placeId = placeIds[i] - 1;
                        if (board[placeId].piece) {
                            if (board[placeId].color !== turn) {
                                newestBoard[placeId] = {
                                    ...board[placeId],
                                    isActiveLocation: "true",
                                };
                            }
                            blocked = true;
                        } else {
                            newestBoard[placeId] = {
                                ...board[placeId],
                                piece: "activeLocation",
                            };
                        }
                        i++;
                    }
                });
                setBoard(newestBoard);
                break;
            default:
                console.log("hi");
        }
    };

    useEffect(() => {
        if (activePiece === square) {
            markActiveLocations();
        }
        // eslint-disable-next-line
    }, [activePiece]);

    const removeActiveLocations = () => {
        setBoard((board) =>
            board.map((square) => {
                if (square.piece === "activeLocation") {
                    return { ...square, piece: null };
                } else if (square.isActiveLocation) {
                    return { ...square, isActiveLocation: false };
                } else {
                    return square;
                }
            })
        );
    };
    const squareClickHandler = () => {
        if (!activePiece && color === turn) {
            setSquareActive(true);
            setActivePiece(square);
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
            setBoard(newBoard);
            removeActiveLocations();
            setSquareActive(false);
            setActivePiece("");
            setTurn(turn === "light" ? "dark" : "light");
        } else if (activePiece && color === turn) {
            setActivePiece(square);
            removeActiveLocations();
        } else if (activePiece && isActiveLocation) {
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
            setBoard(newBoard);
            removeActiveLocations();
            setSquareActive(false);
            setActivePiece("");
            setTurn(turn === "light" ? "dark" : "light");
        } else if (activePiece && !piece) {
            removeActiveLocations();
            setActivePiece("");
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
