import { motion } from "framer-motion";
import { Fruit } from "../../types/Fruit";
import ThemedText from "../ThemedText/ThemedText";
import Button from "../Button/Button";
import fruitsIcons from "../../assets/fruitsIcons";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import "./Modal.css";
import { useFavorite } from "../../hooks/useFavorite";
// import { useMemo } from "react";

type ModalProps = {
  fruit: Fruit;
  closeModal: () => void;
};

const Modal = ({ fruit, closeModal }: ModalProps) => {
  //
  const { addToFavorites, showAsFavorite } = useFavorite();
  //
  return (
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
      <section className="modal-container">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="favorite-container"
          onClick={() => {
            addToFavorites(fruit);
          }}
        >
          {showAsFavorite(fruit) ? (
            <MdFavorite className="favorite-icon" size={32} />
          ) : (
            <MdFavoriteBorder className="favorite-icon" size={32} />
          )}
        </motion.div>
        <img
          src={
            (fruitsIcons as Record<string, string>)[
              fruit.name.toLocaleLowerCase()
            ]
          }
          width={80}
          height={80}
          alt={fruit.name.toLocaleLowerCase()}
        />
        <ThemedText variant="title">{fruit.name}</ThemedText>
        <section className="data-container">
          <div className="data">
            <ThemedText>Family: {fruit.family}</ThemedText>
            <ThemedText>Genus: {fruit.genus}</ThemedText>
            <ThemedText>Order: {fruit.order}</ThemedText>
          </div>
          <div className="data">
            <ThemedText>Nutritions (100g):</ThemedText>
            <ThemedText color="grey">
              Calories: {fruit.nutritions.calories}
            </ThemedText>
            <ThemedText color="grey">
              Carbohydrates: {fruit.nutritions.carbohydrates}
            </ThemedText>
            <ThemedText color="grey">Fat: {fruit.nutritions.fat}</ThemedText>
            <ThemedText color="grey">
              Protein: {fruit.nutritions.protein}
            </ThemedText>
            <ThemedText color="grey">
              Sugar: {fruit.nutritions.sugar}
            </ThemedText>
          </div>
        </section>
        <Button onClick={closeModal}>Close</Button>
      </section>
    </motion.div>
  );
};

export default Modal;
