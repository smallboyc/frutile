import Fruits from "../components/Fruits/Fruits";
import ThemedText from "../components/ThemedText/ThemedText";
import { useFavorite } from "../hooks/useFavorite";

const Favorite = () => {
  const { favorites } = useFavorite();
  return (
    <section className="favorite-container">
      <ThemedText> Favorite numbers : {favorites.length}</ThemedText>
      <Fruits filteredDataFruits={favorites} />
    </section>
  );
};

export default Favorite;
