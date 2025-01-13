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
import Modal from "../components/Modal/Modal";

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
          <Button onClick={() => console.log("Family filter")}>Family</Button>
          <Button onClick={() => console.log("Order filter")}>Order</Button>
          <Button onClick={() => console.log("Genus filter")}>Genus</Button>
          <Button onClick={() => console.log("Nutritions filter")}>
            Nutritions
          </Button>
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
              <Modal fruit={selectedFruit} closeModal={closeModal} />
            )}
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Yard;
