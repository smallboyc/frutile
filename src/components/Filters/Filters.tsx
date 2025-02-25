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
  setFamilyFilters: React.Dispatch<React.SetStateAction<string[]>>;
  setOrderFilters: React.Dispatch<React.SetStateAction<string[]>>;
  setGenusFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

const Filters = ({
  selectedFilterDropdown,
  setSelectedFilterDropdown,
  familyFruits,
  orderFruits,
  genusFruits,
  setFamilyFilters,
  setOrderFilters,
  setGenusFilters,
}: FilterProps) => {
  return (
    <div className="filters-container">
      <ThemedText color="grey">Apply filters...</ThemedText>
      <div className="filter-buttons-container">
        <Button onClick={() => setSelectedFilterDropdown(familyFruits)}>
          Family
        </Button>
        <Button onClick={() => setSelectedFilterDropdown(orderFruits)}>
          Order
        </Button>
        <Button onClick={() => setSelectedFilterDropdown(genusFruits)}>
          Genus
        </Button>
        <Button onClick={() => console.log("Nutritions filter")}>
          Nutritions
        </Button>
      </div>
      <AnimatePresence>
        {selectedFilterDropdown && (
          <Dropdown
            closeDropwdown={() => setSelectedFilterDropdown(null)}
            filters={selectedFilterDropdown}
            setFilter={
              selectedFilterDropdown === familyFruits
                ? setFamilyFilters
                : selectedFilterDropdown === orderFruits
                ? setOrderFilters
                : setGenusFilters
            }
            filterType={
              selectedFilterDropdown === familyFruits
                ? "family"
                : selectedFilterDropdown === orderFruits
                ? "order"
                : "genus"
            }
            style={{
              transform: `translateX(${
                selectedFilterDropdown === orderFruits
                  ? "130px"
                  : selectedFilterDropdown === genusFruits
                  ? "250px"
                  : "0"
              }) translateY(117px)`,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filters;
