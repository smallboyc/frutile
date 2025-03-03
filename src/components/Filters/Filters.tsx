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

type FilterProps = {
  selectedFilterParent: string[] | null;
  setSelectedFilterParent: React.Dispatch<
    React.SetStateAction<string[] | null>
  >;
  familyFruits: string[];
  orderFruits: string[];
  genusFruits: string[];
  nutritionFruits: string[];
  setFamilyFilters: React.Dispatch<React.SetStateAction<string[]>>;
  setOrderFilters: React.Dispatch<React.SetStateAction<string[]>>;
  setGenusFilters: React.Dispatch<React.SetStateAction<string[]>>;
  setNutritionFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

const Filters = ({
  selectedFilterParent,
  setSelectedFilterParent,
  familyFruits,
  orderFruits,
  genusFruits,
  nutritionFruits,
  setFamilyFilters,
  setOrderFilters,
  setGenusFilters,
  setNutritionFilters,
}: FilterProps) => {
  const configs = [
    {
      type: "family",
      filters: familyFruits,
      setFilter: setFamilyFilters,
      label: "Family",
    },
    {
      type: "order",
      filters: orderFruits,
      setFilter: setOrderFilters,
      label: "Order",
    },
    {
      type: "genus",
      filters: genusFruits,
      setFilter: setGenusFilters,
      label: "Genus",
    },
    {
      type: "nutrition",
      filters: nutritionFruits,
      setFilter: setNutritionFilters,
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
  //TODO : Faire un usestate pour le localstorage.

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
        {localStorage.length > 0 && (
          <Button
            onClick={() => {
              setFamilyFilters([]);
              setGenusFilters([]);
              setOrderFilters([]);
              setNutritionFilters([]);
              setSelectedFilterParent(null);
              localStorage.clear();
            }}
          >
            <FaTrash size={16} />
          </Button>
        )}
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
