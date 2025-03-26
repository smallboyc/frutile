import { useMemo, useState } from "react";
import { Fruit } from "../types/Fruit";
import { useFetchData } from "../hooks/useFetchData";
import { NutritionDiagram } from "../components/NutritionDiagram/NutritionDiagram";
import { AnimatePresence, motion } from "framer-motion";
import { useFilters } from "../hooks/useFilters";
import { parentFilterCorrespond } from "../utils/utils";
import "rsuite/Loader/styles/index.css";
import SearchBar from "../components/SearchBar/SearchBar";
import ThemedText from "../components/ThemedText/ThemedText";
import Modal from "../components/Modal/Modal";
import Filters from "../components/Filters/Filters";
import Fruits from "../components/Fruits/Fruits";

const Yard = () => {
  const { data, loading } = useFetchData("api/fruit/all");
  const [search, setSearch] = useState("");

  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);
  //
  const fruitFilter = useFilters(data);

  const [selectedFilterParent, setSelectedFilterParent] = useState<
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

    if (fruitFilter.familyFilters.length) {
      result = result?.filter((fruit: Fruit) =>
        fruitFilter.familyFilters.includes(fruit.family)
      );
    }
    if (fruitFilter.genusFilters.length) {
      result = result?.filter((fruit: Fruit) =>
        fruitFilter.genusFilters.includes(fruit.genus)
      );
    }
    if (fruitFilter.orderFilters.length) {
      result = result?.filter((fruit: Fruit) =>
        fruitFilter.orderFilters.includes(fruit.order)
      );
    }

    return result;
  }, [
    data,
    search,
    fruitFilter.familyFilters,
    fruitFilter.genusFilters,
    fruitFilter.orderFilters,
  ]);

  return (
    <section className="yard-container">
      <ThemedText variant="bigTitle">The Yard !</ThemedText>
      <ThemedText color="grey">
        Here you can experiment with researching the characteristics of your
        favorite fruits. Have fun!
      </ThemedText>
      <SearchBar search={search} setSearch={setSearch} />
      <Filters
        selectedFilterParent={selectedFilterParent}
        setSelectedFilterParent={setSelectedFilterParent}
        fruitFilters={fruitFilter}
      />
      <ThemedText color="grey">
        {filteredDataFruits?.length != 0
          ? `Number of fruits displayed : ${filteredDataFruits?.length}`
          : "No fruits to display :("}
      </ThemedText>
      {selectedFilterParent &&
      parentFilterCorrespond(
        selectedFilterParent,
        fruitFilter.nutritionFruits
      ) ? (
        <NutritionDiagram
          filteredDataFruits={filteredDataFruits}
          nutritionFilters={fruitFilter.nutritionFilters}
        />
      ) : (
        <Fruits
          filteredDataFruits={filteredDataFruits}
          loading={loading}
          setSelectedFruit={setSelectedFruit}
        />
      )}
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
