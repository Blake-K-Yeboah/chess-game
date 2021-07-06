import Logo from "../img/Chess Logo.jpg";

const TitleBox = () => {
   return (
      <div className="title-box">
         <img src={Logo} alt="Chess Logo" className="logo" />
         <h1 className="title">Chess</h1>
      </div>
   );
};

export default TitleBox;
