import { NavLink } from "react-router-dom";
import "./Navigation.css";
import ThemedText from "../../ThemedText/ThemedText";
import { MdFavoriteBorder } from "react-icons/md";
import { motion } from "motion/react";

const Navigation = () => {
  return (
    <ul className="nav-link-container">
      <li>
        <ThemedText>
          <NavLink to="/yard">The Yard !</NavLink>
        </ThemedText>
      </li>
      <li>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/favorite">
            {" "}
            <MdFavoriteBorder size={32} />
          </NavLink>
        </motion.div>
      </li>
    </ul>
  );
};

export default Navigation;
