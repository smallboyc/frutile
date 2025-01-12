import { FaLanguage } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>
        <NavLink to="/">fr'utile</NavLink>
      </h2>
      <ul className="nav-link-container">
        <li>
          <NavLink to="/yard">Yard</NavLink>
        </li>
        <li>
          <NavLink to="/quiz">Quiz</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <FaLanguage size={24} />
    </header>
  );
};

export default Header;
