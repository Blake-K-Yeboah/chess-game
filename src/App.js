// useState Hook
import { useState } from "react";

// Styling
import "./App.css";

// Components
import TitleBox from "./components/TitleBox";
import BoardContainer from "./components/BoardContainer";
import ScoreBox from "./components/ScoreBox";

function App() {
    const [collectedPieces, setCollectedPieces] = useState({
        light: [
            "pawn",
            "pawn",
            "pawn",
            "pawn",
            "pawn",
            "pawn",
            "pawn",
            "pawn",
            "pawn",
            "pawn",
        ],
        dark: [
            "pawn",
            "pawn",
            "pawn",
            "pawn",
            "pawn",
            "pawn",
            "pawn",
            "pawn",
            "pawn",
            "pawn",
        ],
    });

    const [turn, setTurn] = useState("light");

    return (
        <>
            <div className="box-grid">
                <TitleBox turn={turn} />
                <ScoreBox collectedPieces={collectedPieces} />
            </div>
            <BoardContainer turn={turn} setTurn={setTurn} />
        </>
    );
}

export default App;
