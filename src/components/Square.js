const Square = ({ color, piece }) => {
   return <div className={`square ${color}`}>{piece}</div>;
};

export default Square;
