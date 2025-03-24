import Fruits from "../components/Fruits/Fruits";
import ThemedText from "../components/ThemedText/ThemedText";
import { useFavorite } from "../hooks/useFavorite";

const Favorite = () => {
  const { favorites } = useFavorite();
  return (
    <main>
      <ThemedText> Favorite numbers : {favorites.length}</ThemedText>
      <Fruits filteredDataFruits={favorites} />
    </main>
  );
};

export default Favorite;
