
import { useEffect, useState } from "react";
import { Fruit } from "../types/Fruit";

export const useFavorite = () => {
  const [favorites, setFavorites] = useState<Fruit[]>([]);

  const updateFavorite = () => {
    const storageFavoriteData = localStorage.getItem("favorites");
    setFavorites(
      storageFavoriteData && storageFavoriteData.length > 0
        ? JSON.parse(storageFavoriteData)
        : []
    );
  };

  useEffect(() => {
    updateFavorite();
  }, []);

  const showAsFavorite = (fruit: Fruit) => {
    return favorites.some((fav) => fav.id === fruit.id);
  };

  const addToFavorites = (fruit: Fruit) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === fruit.id);
      const newFavorites = isFavorite
        ? prevFavorites.filter((fav) => fav.id !== fruit.id)
        : [...prevFavorites, fruit];

      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return {
    favorites,
    showAsFavorite,
    addToFavorites,
  };
};
