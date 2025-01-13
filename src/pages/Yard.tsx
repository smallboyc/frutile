import { useMemo, useState } from "react";
import { Fruit } from "../types/Fruit";
import { useFetchData } from "../hooks/useFetchData";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "rsuite/Loader";
import "rsuite/Loader/styles/index.css";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import ThemedText from "../components/ThemedText/ThemedText";

const Yard = () => {
  const { data, loading } = useFetchData("api/fruit/all");
  const [input, setInput] = useState("");
  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const hiddenFruitList: number[] = [65, 66, 95, 101, 104];
  const filteredFruit: Fruit[] | undefined = data?.filter(
    (fruit: Fruit) => !hiddenFruitList.includes(fruit.id)
  );

  const displayFruit = (fruit: Fruit) => {
    return fruit.name.toLocaleLowerCase().startsWith(input.toLocaleLowerCase());
  };

  const displayedFruitCount: number | null = useMemo(() => {
    return filteredFruit?.filter(displayFruit).length || 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredFruit, input]);

  const openModal = (fruit: Fruit) => {
    setSelectedFruit(fruit);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="yard-container">
      <ThemedText variant="bigTitle">The Yard !</ThemedText>
      <ThemedText color="grey">
        Here you can experiment with researching the characteristics of your
        favorite fruits. Have fun!
      </ThemedText>
      <SearchBar input={input} setInput={setInput} />
      <div className="filters-container">
        <ThemedText color="grey">Apply filters...</ThemedText>
        <div className="filter-buttons-container">
          <Button label="Family" />
          <Button label="Order" />
          <Button label="Genus" />
          <Button label="Nutritions" />
        </div>
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
              <motion.div
                className="custom-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", bounce: 0.3 },
                }}
              >
                <h2>{selectedFruit.name}</h2>
                <p>Family: {selectedFruit.family}</p>
                <p>Genus: {selectedFruit.genus}</p>
                <p>Order: {selectedFruit.order}</p>
                <p>Calories: {selectedFruit.nutritions.calories}</p>
                <p>Carbohydrates: {selectedFruit.nutritions.carbohydrates}</p>
                <p>Fat: {selectedFruit.nutritions.fat}</p>
                <p>Protein: {selectedFruit.nutritions.protein}</p>
                <p>Sugar: {selectedFruit.nutritions.sugar}</p>
                <button onClick={closeModal}>Close</button>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Yard;
