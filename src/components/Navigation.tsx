import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="nav-link-container">
      <li>
        <NavLink to="/yard">Yard</NavLink>
      </li>
      {/* <li>
        <NavLink to="/quiz">Quiz</NavLink>
      </li> */}
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
