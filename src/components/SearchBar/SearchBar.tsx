import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { SearchBarProps } from "../../types/props";
import "./SearchBar.css";

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  return (
    <motion.div className="search-bar-container" whileTap={{ scale: 0.97 }}>
      <FaSearch size={16} />
      <input
        className="search-bar-input"
        placeholder="Search a fruit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </motion.div>
  );
};

export default SearchBar;
