import { useState } from "react";
import { Fruit } from "../types/Fruit";
import { useFetchData } from "../hooks/useFetchData";
import Loader from "rsuite/Loader";
import "rsuite/Loader/styles/index.css";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../components/Card/Card";

const Yard = () => {
  const { data, loading } = useFetchData("api/fruit/all");
  const [input, setInput] = useState("");

  const hiddenFruitList: number[] = [65, 66, 95, 101, 104];
  const filteredFruit: Fruit[] | undefined = data?.filter(
    (fruit: Fruit) => !hiddenFruitList.includes(fruit.id)
  );
  const displayFruit = (fruit: Fruit) => {
    return fruit.name.toLocaleLowerCase().startsWith(input.toLocaleLowerCase());
  };

  return (
    <div className="yard-container">
      <SearchBar input={input} setInput={setInput} />
      <div className="fruits-container">
        {loading ? (
          <Loader size="sm" speed="slow" content="Chargement de la data..." />
        ) : (
          filteredFruit?.map(
            (fruit: Fruit) =>
              displayFruit(fruit) && <Card key={fruit.id} fruit={fruit} />
          )
        )}
      </div>
    </div>
  );
};

export default Yard;
