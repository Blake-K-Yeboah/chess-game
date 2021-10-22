// Components
import Board from "./Board";

const BoardContainer = ({ turn, setTurn }) => {
    return (
        <div className="board-container">
            <Board turn={turn} setTurn={setTurn} />
        </div>
    );
};

export default BoardContainer;
