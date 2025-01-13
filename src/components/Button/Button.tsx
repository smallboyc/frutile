import { motion } from "framer-motion";
import ThemedText from "../ThemedText/ThemedText";
import "./Button.css";

const Button = ({ label }: { label: string }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
      <button
        className="button-container"
        onClick={() => console.log("Action")}
      >
        <ThemedText>{label}</ThemedText>
      </button>
    </motion.div>
  );
};

export default Button;
