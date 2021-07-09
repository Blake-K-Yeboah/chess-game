const ScoreBox = ({ collectedPieces }) => {
   const displayPiece = (piece) => {
      switch (piece) {
         case "king":
            return <span>&#9812;</span>;
         case "queen":
            return <span>&#9813;</span>;
         case "pawn":
            return <span>&#9817;</span>;
         case "bishop":
            return <span>&#9815;</span>;
         case "knight":
            return <span>&#9816;</span>;
         case "rook":
            return <span>&#9814;</span>;
         default:
            console.log("this shouldnt happen.");
      }
   };

   return (
      <div className="score-box">
         <div className="player-container white">
            <span className="player-icon">&#9812;</span>
            <div className="content">
               <h3 className="player-title">White</h3>
               <div className="pieces">
                  {collectedPieces.light.map((piece) => {
                     return displayPiece(piece);
                  })}
               </div>
            </div>
         </div>

         <div className="player-container black">
            <span className="player-icon">&#9812;</span>
            <div className="content">
               <h3 className="player-title">Black</h3>
               <div className="pieces">
                  {collectedPieces.dark.map((piece) => {
                     return displayPiece(piece);
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ScoreBox;
