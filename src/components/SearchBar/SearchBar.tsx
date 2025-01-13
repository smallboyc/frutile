import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import "./SearchBar.css";

type SearchBarProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ input, setInput }: SearchBarProps) => {
  return (
    <motion.div className="search-bar-container" whileTap={{ scale: 0.97 }}>
      <FaSearch size={16} />
      <input
        className="search-bar-input"
        placeholder="Search a fruit..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </motion.div>
  );
};

export default SearchBar;
