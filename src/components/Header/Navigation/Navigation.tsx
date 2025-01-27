import { NavLink } from "react-router-dom";
import "./Navigation.css";
import ThemedText from "../../ThemedText/ThemedText";

const Navigation = () => {
  return (
    <ul className="nav-link-container">
      <li>
        <ThemedText>
          <NavLink to="/yard" onClick={() => localStorage.clear()}>
            Yard
          </NavLink>
        </ThemedText>
      </li>
      <li>
        <ThemedText>
          <NavLink to="/about" onClick={() => localStorage.clear()}>
            About
          </NavLink>
        </ThemedText>
      </li>
    </ul>
  );
};

export default Navigation;
