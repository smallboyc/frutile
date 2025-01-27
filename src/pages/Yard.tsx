import { useEffect, useMemo, useState } from "react";
import { Fruit } from "../types/Fruit";
import { useFetchData } from "../hooks/useFetchData";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "rsuite/Loader";
import "rsuite/Loader/styles/index.css";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import ThemedText from "../components/ThemedText/ThemedText";
import Modal from "../components/Modal/Modal";
import Dropdown from "../components/Dropdown/Dropdown";

const Yard = () => {
  const { data, loading } = useFetchData("api/fruit/all");
  const [input, setInput] = useState("");
  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dropDownIsOpen, setDropdownIsOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[] | undefined>();
  const [activeFilterType, setActiveFilterType] = useState<
    "Family" | "Order" | "Genus" | undefined
  >(undefined);
  const [currentFilter, setCurrentFilter] = useState<string>("");
  //
  // const keepActiveFilterList: string[] = [];
  //
  const familyFruits: string[] = [];
  const orderFruits: string[] = [];
  const genusFruits: string[] = [];

  const addData = (array: string[], typeData: string) => {
    if (!array.includes(typeData)) {
      array.push(typeData);
    }
  };
  //
  useEffect(() => {
    const filterFamilyFruit = () => {
      data?.forEach((fruit: Fruit) => {
        addData(familyFruits, fruit.family);
        addData(orderFruits, fruit.order);
        addData(genusFruits, fruit.genus);
      });
    };
    filterFamilyFruit();
  });
  //
  useEffect(() => {
    const getLabelFilter = () => {
      if (JSON.stringify(activeFilters) == JSON.stringify(familyFruits))
        setActiveFilterType("Family");
      else if (JSON.stringify(activeFilters) == JSON.stringify(orderFruits))
        setActiveFilterType("Order");
      else if (JSON.stringify(activeFilters) == JSON.stringify(genusFruits))
        setActiveFilterType("Genus");
    };
    getLabelFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters]);

  const hiddenFruitList: number[] = [65, 66, 95, 101, 104];
  const filteredFruit: Fruit[] | undefined = data?.filter(
    (fruit: Fruit) => !hiddenFruitList.includes(fruit.id)
  );

  const displayFruit = (fruit: Fruit) => {
    if (
      //si j'ai des filtres d'activer, j'affiche par rapport aux filtre et aussi à la saisie utilisateur.
      (fruit.name.toLocaleLowerCase().startsWith(input.toLocaleLowerCase()) &&
        fruit.order == currentFilter) ||
      fruit.genus == currentFilter ||
      fruit.family == currentFilter
    )
      return true;
    else if (
      //si j'ai pas de filtre => on check juste la saisie.
      currentFilter == "" &&
      fruit.name.toLocaleLowerCase().startsWith(input.toLocaleLowerCase())
    )
      return true;
    return false;
  };

  console.log(currentFilter);

  const displayedFruitCount: number | null = useMemo(() => {
    return filteredFruit?.filter(displayFruit).length || 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredFruit, input]);

  const openModal = (fruit: Fruit) => {
    setSelectedFruit(fruit);
    setModalIsOpen(true);
    setDropdownIsOpen(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openDropdown = () => {
    setDropdownIsOpen(true);
  };

  const closeDropdown = () => {
    setDropdownIsOpen(false);
  };

  return (
    <section className="yard-container">
      <ThemedText variant="bigTitle">The Yard !</ThemedText>
      <ThemedText color="grey">
        Here you can experiment with researching the characteristics of your
        favorite fruits. Have fun!
      </ThemedText>
      <SearchBar input={input} setInput={setInput} />
      {/* TODO : Update filters & dropdowns */}
      <div className="filters-container">
        <ThemedText color="grey">Apply filters...</ThemedText>
        <div className="filter-buttons-container">
          <Button
            onClick={() => {
              openDropdown();
              setActiveFilters(familyFruits);
            }}
          >
            Family
          </Button>
          <Button
            onClick={() => {
              openDropdown();
              setActiveFilters(orderFruits);
            }}
          >
            Order
          </Button>
          <Button
            onClick={() => {
              openDropdown();
              setActiveFilters(genusFruits);
            }}
          >
            Genus
          </Button>
          <Button onClick={() => console.log("Nutritions filter")}>
            Nutritions
          </Button>
        </div>
        {/* dropdown */}
        <AnimatePresence>
          {dropDownIsOpen && (
            <Dropdown
              closeDropwdown={closeDropdown}
              filters={activeFilters}
              currentFilter={currentFilter}
              setCurrentFilter={setCurrentFilter}
              labelFilters={activeFilterType}
            />
          )}
        </AnimatePresence>
      </div>
      <ThemedText color="grey">
        {displayedFruitCount
          ? `Number of fruits displayed : ${displayedFruitCount}`
          : "No fruits to display :("}
      </ThemedText>
      <div className="fruits-container">
        {loading ? (
          <Loader size="sm" speed="slow" content="Chargement de la data..." />
        ) : (
          filteredFruit?.map(
            (fruit: Fruit) =>
              displayFruit(fruit) && (
                <Card
                  key={fruit.id}
                  fruit={fruit}
                  OnClick={() => openModal(fruit)}
                />
              )
          )
        )}
      </div>
      {/* modal */}
      <AnimatePresence>
        {modalIsOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            />

            {/* Modal content */}
            {selectedFruit && (
              <Modal fruit={selectedFruit} closeModal={closeModal} />
            )}
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Yard;
