import { motion } from "framer-motion";
import ThemedText from "../ThemedText/ThemedText";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
      <button className="button-container" onClick={onClick}>
        <ThemedText>{children}</ThemedText>
      </button>
    </motion.div>
  );
};

export default Button;
