import { NavLink } from "react-router-dom";
import FrutileIcon from "../../../assets/images/frutile-icon.png";
import ThemedText from "../../ThemedText/ThemedText";

const Logo = () => {
  return (
    <>
      <img src={FrutileIcon} width={32} height={32} alt="fr'utile icon" />
      <ThemedText variant="title">
        <NavLink to="/">fr'utile</NavLink>
      </ThemedText>
    </>
  );
};

export default Logo;
