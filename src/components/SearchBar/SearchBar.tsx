import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({
  input,
  setInput,
}: {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="search-bar-container">
      <FaSearch size={16} />
      <input
        className="search-bar-input"
        placeholder="Search a fruit..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
