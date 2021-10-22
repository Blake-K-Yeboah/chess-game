import Logo from "../img/Chess Logo.jpg";

const TitleBox = ({ turn }) => {
    return (
        <div className="title-box">
            <img src={Logo} alt="Chess Logo" className="logo" />
            <h1 className="title">Chess</h1>
            <div className={`${turn} turn`}>
                Turn <br />
                <span className="player-icon">&#9812;</span>
            </div>
        </div>
    );
};

export default TitleBox;
