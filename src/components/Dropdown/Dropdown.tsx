import { motion } from "framer-motion";
import Button from "../Button/Button";
import "./Dropdown.css";
import { useState } from "react";
import ThemedText from "../ThemedText/ThemedText";

type DropdownProps = {
  closeDropwdown: () => void;
  filters?: string[];
  currentFilter: string;
  setCurrentFilter: React.Dispatch<React.SetStateAction<string>>;
  labelFilters: "Family" | "Order" | "Genus" | undefined;
};

const Dropdown = ({
  closeDropwdown,
  filters,
  currentFilter,
  setCurrentFilter,
  labelFilters,
}: DropdownProps) => {
  const toggleFilter = (filter: string) => {
    if (currentFilter == filter) {
      setCurrentFilter("");
      localStorage.removeItem(filter);
    } else {
      setCurrentFilter(filter);
      localStorage.setItem(filter, filter);
    }
  };

  const [maxFilter, setMaxFilter] = useState<number>(7);

  return (
    <motion.div
      style={{
        translateX:
          labelFilters == "Order"
            ? "130px"
            : labelFilters == "Genus"
            ? "260px"
            : "0px",
        translateY: "117px",
      }}
      className="custom-dropdown"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", bounce: 0.3 },
      }}
    >
      <div className="checkbox-container">
        <ThemedText>{labelFilters}</ThemedText>
        <label htmlFor="volume">N° of filters</label>
        <input
          value={maxFilter}
          type="range"
          id="volume"
          name="volume"
          min="4"
          max={filters?.length}
          onChange={(e) => setMaxFilter(Number(e.target.value))}
        />
        <div>
          {filters?.map(
            (filter: string, index: number) =>
              maxFilter &&
              index < maxFilter && (
                <div key={index} className="checkbox-item">
                  <input
                    checked={localStorage.getItem(filter) ? true : false}
                    type="checkbox"
                    id={filter}
                    name={filter}
                    onClick={() => toggleFilter(filter)}
                  />
                  <label htmlFor={filter}>{filter}</label>
                </div>
              )
          )}
        </div>
        <div className="etc-container">
          <ThemedText>. . .</ThemedText>
        </div>
      </div>
      <Button onClick={closeDropwdown}>Close</Button>
    </motion.div>
  );
};

export default Dropdown;
