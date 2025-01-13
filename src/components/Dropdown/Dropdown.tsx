import { motion } from "framer-motion";
import ThemedText from "../ThemedText/ThemedText";
import Button from "../Button/Button";
import "./Dropdown.css";

type DropdownProps = {
  closeDropwdown: () => void;
};

const Dropdown = ({ closeDropwdown }: DropdownProps) => {
  return (
    <motion.div
      className="custom-dropdown"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", bounce: 0.3 },
      }}
    >
      <ThemedText>Element</ThemedText>
      <Button onClick={closeDropwdown}>Close</Button>
    </motion.div>
  );
};

export default Dropdown;
