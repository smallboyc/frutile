import Fruits from "../components/Fruits/Fruits";
import ThemedText from "../components/ThemedText/ThemedText";
import { useFavorite } from "../hooks/useFavorite";
import "../styles/Favorite.css";

const Favorite = () => {
  const { favorites } = useFavorite();
  return (
    <section className="favorite-container">
      <ThemedText> Here you can find your favorite fruits !</ThemedText>
      {favorites.length == 0 ? (
        <ThemedText color="grey"> No favorite fruits found :(</ThemedText>
      ) : (
        <ThemedText color="grey">
          {" "}
          Favorite fruits : {favorites.length}
        </ThemedText>
      )}

      <Fruits filteredDataFruits={favorites} />
    </section>
  );
};

export default Favorite;
