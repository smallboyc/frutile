import { motion } from "framer-motion";
import Button from "../Button/Button";
import "./Dropdown.css";
import { useEffect, useState } from "react";
import ThemedText from "../ThemedText/ThemedText";

type DropdownProps = {
  closeDropwdown: () => void;
  filters?: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  filterType: string;
  style?: React.CSSProperties;
};

const Dropdown = ({
  closeDropwdown,
  filters,
  setFilter,
  filterType,
  style,
}: DropdownProps) => {
  
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [maxFilter, setMaxFilter] = useState<number>(7);

  useEffect(() => {
    // Récupérer les filtres sélectionnés depuis localStorage au chargement
    const storedFilters = localStorage.getItem(filterType);
    if (storedFilters) {
      setSelectedFilters(JSON.parse(storedFilters));
      setFilter(JSON.parse(storedFilters));
    }
  }, [filterType, setFilter]);

  const toggleFilter = (filter: string) => {
    let newFilters;
    if (selectedFilters.includes(filter)) {
      newFilters = selectedFilters.filter((f) => f !== filter);
    } else {
      newFilters = [...selectedFilters, filter];
    }
    setSelectedFilters(newFilters);
    setFilter(newFilters);
    localStorage.setItem(filterType, JSON.stringify(newFilters));
  };

  return (
    <motion.div
      style={style}
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
                    checked={selectedFilters.includes(filter)}
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
