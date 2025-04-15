import Button from "../Button/Button";
import ThemedText from "../ThemedText/ThemedText";
import { AnimatePresence } from "framer-motion";
import Dropdown from "../Dropdown/Dropdown";
import "./Filters.css";
import { parentFilterCorrespond } from "../../utils/utils";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FilterProps } from "../../types/props";

const Filters = ({
  selectedFilterParent,
  setSelectedFilterParent,
  fruitFilters,
}: FilterProps) => {
  const configs = [
    {
      type: "family",
      filters: fruitFilters.familyFruits,
      setFilter: fruitFilters.setFamilyFilters,
      label: "Family",
    },
    {
      type: "order",
      filters: fruitFilters.orderFruits,
      setFilter: fruitFilters.setOrderFilters,
      label: "Order",
    },
    {
      type: "genus",
      filters: fruitFilters.genusFruits,
      setFilter: fruitFilters.setGenusFilters,
      label: "Genus",
    },
    {
      type: "nutrition",
      filters: fruitFilters.nutritionFruits,
      setFilter: fruitFilters.setNutritionFilters,
      label: "Nutritions",
    },
  ];

  const getFilterConfig = (currentFilter: string[] | null) => {
    if (!currentFilter) return null;

    return configs.find((config) =>
      parentFilterCorrespond(currentFilter, config.filters)
    );
  };

  const currentConfig = getFilterConfig(selectedFilterParent);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="filters-container">
      <ThemedText color="grey">Apply filters...</ThemedText>
      <div className="filter-buttons-container">
        {configs.map(
          ({
            type,
            filters,
            label,
          }: {
            type: string;
            filters: string[];
            label: string;
          }) =>
            (!selectedFilterParent ||
              parentFilterCorrespond(selectedFilterParent, filters)) && (
              <Button
                key={type}
                onClick={() => setSelectedFilterParent(filters)}
              >
                {label}
              </Button>
            )
        )}
        {/* Close filter if selected */}
        {selectedFilterParent && (
          <>
            {showDropdown ? (
              <Button onClick={() => setShowDropdown(!showDropdown)}>
                <FaEye />
              </Button>
            ) : (
              <Button onClick={() => setShowDropdown(!showDropdown)}>
                <FaEyeSlash />
              </Button>
            )}
            <Button onClick={() => setSelectedFilterParent(null)}>X</Button>
          </>
        )}
        <Button
          onClick={() => {
            fruitFilters.setFamilyFilters([]);
            fruitFilters.setGenusFilters([]);
            fruitFilters.setOrderFilters([]);
            fruitFilters.setNutritionFilters([]);
            setSelectedFilterParent(null);
            localStorage.clear();
          }}
        >
          <FaTrash size={16} />
        </Button>
      </div>
      <AnimatePresence>
        {selectedFilterParent && showDropdown && currentConfig && (
          <Dropdown
            filters={currentConfig.filters}
            setFilter={currentConfig.setFilter}
            filterType={currentConfig.type}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filters;
