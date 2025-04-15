import { NavLink } from "react-router-dom";
import FrutileIcon from "../../../assets/images/frutile-icon.png";
import ThemedText from "../../ThemedText/ThemedText";

const Logo = ({ large = false }: { large?: boolean }) => {
  return (
    <>
      <img
        src={FrutileIcon}
        width={large ? 72 : 32}
        height={large ? 72 : 32}
        alt="fr'utile icon"
      />
      <ThemedText variant={large ? "bigTitle" : "title"}>
        <NavLink to="/">fr'utile</NavLink>
      </ThemedText>
    </>
  );
};

export default Logo;
