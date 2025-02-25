import Button from "../Button/Button";
import ThemedText from "../ThemedText/ThemedText";
import { AnimatePresence } from "framer-motion";
import Dropdown from "../Dropdown/Dropdown";
import "./Filters.css";

type FilterProps = {
  selectedFilterDropdown: string[] | null;
  setSelectedFilterDropdown: React.Dispatch<
    React.SetStateAction<string[] | null>
  >;
  familyFruits: string[];
  orderFruits: string[];
  genusFruits: string[];
  nutritionFruits: string[];
  setFamilyFilters: React.Dispatch<React.SetStateAction<string[]>>;
  setOrderFilters: React.Dispatch<React.SetStateAction<string[]>>;
  setGenusFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

//problème lors de la comparaison de nutritionFruits avec selectedFilterDropdown => manière brute
const arraysEqual = (a: string[], b: string[]) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const Filters = ({
  selectedFilterDropdown,
  setSelectedFilterDropdown,
  familyFruits,
  orderFruits,
  genusFruits,
  nutritionFruits,
  setFamilyFilters,
  setOrderFilters,
  setGenusFilters,
}: FilterProps) => {
  return (
    <div className="filters-container">
      <ThemedText color="grey">Apply filters...</ThemedText>
      <div className="filter-buttons-container">
        {!selectedFilterDropdown ||
        arraysEqual(selectedFilterDropdown, familyFruits) ? (
          <Button onClick={() => setSelectedFilterDropdown(familyFruits)}>
            Family
          </Button>
        ) : null}

        {!selectedFilterDropdown ||
        arraysEqual(selectedFilterDropdown, orderFruits) ? (
          <Button onClick={() => setSelectedFilterDropdown(orderFruits)}>
            Order
          </Button>
        ) : null}

        {!selectedFilterDropdown ||
        arraysEqual(selectedFilterDropdown, genusFruits) ? (
          <Button onClick={() => setSelectedFilterDropdown(genusFruits)}>
            Genus
          </Button>
        ) : null}

        {!selectedFilterDropdown ||
        arraysEqual(selectedFilterDropdown, nutritionFruits) ? (
          <Button onClick={() => setSelectedFilterDropdown(nutritionFruits)}>
            Nutritions
          </Button>
        ) : null}

        {selectedFilterDropdown && (
          <Button onClick={() => setSelectedFilterDropdown(null)}>X</Button>
        )}
      </div>

      <AnimatePresence>
        {selectedFilterDropdown && (
          <Dropdown
            filters={selectedFilterDropdown}
            setFilter={
              arraysEqual(selectedFilterDropdown, familyFruits)
                ? setFamilyFilters
                : arraysEqual(selectedFilterDropdown, orderFruits)
                ? setOrderFilters
                : arraysEqual(selectedFilterDropdown, genusFruits)
                ? setGenusFilters
                : setGenusFilters // Assurez-vous que ceci est correct
            }
            filterType={
              arraysEqual(selectedFilterDropdown, familyFruits)
                ? "family"
                : arraysEqual(selectedFilterDropdown, orderFruits)
                ? "order"
                : arraysEqual(selectedFilterDropdown, genusFruits)
                ? "genus"
                : "nutrition"
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filters;
