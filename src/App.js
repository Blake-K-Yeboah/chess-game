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
   return (
      <>
         <div className="box-grid">
            <TitleBox />
            <ScoreBox collectedPieces={collectedPieces} />
         </div>
         <BoardContainer />
      </>
   );
}

export default App;
