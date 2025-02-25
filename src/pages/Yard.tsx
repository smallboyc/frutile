import { useMemo, useState } from "react";
import { Fruit } from "../types/Fruit";
import { useFetchData } from "../hooks/useFetchData";
import "rsuite/Loader/styles/index.css";
import SearchBar from "../components/SearchBar/SearchBar";
import ThemedText from "../components/ThemedText/ThemedText";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../components/Modal/Modal";
import { useFilters } from "../hooks/useFilters";
import Filters from "../components/Filters/Filters";
import Fruits from "../components/Fruits/Fruits";

const Yard = () => {
  const { data, loading } = useFetchData("api/fruit/all");
  const [fruitDisplayCount, setFruitDisplayCount] = useState(data?.length);
  const [search, setSearch] = useState("");
  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);
  const {
    familyFilters,
    setFamilyFilters,
    orderFilters,
    setOrderFilters,
    genusFilters,
    setGenusFilters,
    familyFruits,
    orderFruits,
    genusFruits,
  } = useFilters(data);

  const [selectedFilterDropdown, setSelectedFilterDropdown] = useState<
    string[] | null
  >(null);

  const filteredDataFruits: Fruit[] | undefined = useMemo(() => {
    const hiddenFruitList: number[] = [65, 66, 95, 101, 104];
    let result: Fruit[] | undefined = data?.filter(
      (fruit: Fruit) => !hiddenFruitList.includes(fruit.id)
    );

    result = result?.filter((fruit: Fruit) =>
      fruit.name.toLowerCase().startsWith(search.toLowerCase())
    );

    if (familyFilters.length > 0) {
      result = result?.filter((fruit: Fruit) =>
        familyFilters.includes(fruit.family)
      );
    }
    if (genusFilters.length > 0) {
      result = result?.filter((fruit: Fruit) =>
        genusFilters.includes(fruit.genus)
      );
    }
    if (orderFilters.length > 0) {
      result = result?.filter((fruit: Fruit) =>
        orderFilters.includes(fruit.order)
      );
    }

    setFruitDisplayCount(result?.length);

    return result;
  }, [data, search, familyFilters, genusFilters, orderFilters]);

  return (
    <section className="yard-container">
      <ThemedText variant="bigTitle">The Yard !</ThemedText>
      <ThemedText color="grey">
        Here you can experiment with researching the characteristics of your
        favorite fruits. Have fun!
      </ThemedText>
      <SearchBar search={search} setSearch={setSearch} />
      <Filters
        selectedFilterDropdown={selectedFilterDropdown}
        setSelectedFilterDropdown={setSelectedFilterDropdown}
        familyFruits={familyFruits}
        orderFruits={orderFruits}
        genusFruits={genusFruits}
        setFamilyFilters={setFamilyFilters}
        setOrderFilters={setOrderFilters}
        setGenusFilters={setGenusFilters}
      />
      <ThemedText color="grey">
        {fruitDisplayCount != 0
          ? `Number of fruits displayed : ${fruitDisplayCount}`
          : "No fruits to display :("}
      </ThemedText>
      <Fruits
        filteredDataFruits={filteredDataFruits}
        loading={loading}
        setSelectedFruit={setSelectedFruit}
      />
      <AnimatePresence>
        {selectedFruit && (
          <>
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedFruit(null)}
            />
            <Modal
              fruit={selectedFruit}
              closeModal={() => setSelectedFruit(null)}
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Yard;
