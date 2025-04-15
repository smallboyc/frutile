import { motion } from "framer-motion";
import ThemedText from "../ThemedText/ThemedText";
import { ButtonProps } from "../../types/props";
import "./Button.css";

const Button = ({ children, style, onClick }: ButtonProps) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
      <button className="button-container" style={style} onClick={onClick}>
        <ThemedText>{children}</ThemedText>
      </button>
    </motion.div>
  );
};

export default Button;
