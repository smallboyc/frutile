import { NavLink } from "react-router-dom";
import FrutileIcon from "../../../assets/images/frutile-icon.png";

const Logo = () => {
  return (
    <>
      <img src={FrutileIcon} width={32} height={32} alt="fr'utile icon" />
      <h1>
        <NavLink to="/">fr'utile</NavLink>
      </h1>
    </>
  );
};

export default Logo;
