import { NavLink } from "react-router-dom";
import "./Navigation.css";
import ThemedText from "../../ThemedText/ThemedText";

const Navigation = () => {
  return (
    <ul className="nav-link-container">
      <li>
        <ThemedText>
          <NavLink to="/yard">Yard</NavLink>
        </ThemedText>
      </li>
      <li>
        <ThemedText>
          <NavLink to="/about">About</NavLink>
        </ThemedText>
      </li>
    </ul>
  );
};

export default Navigation;
