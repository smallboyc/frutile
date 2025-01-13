import { useMemo, useState } from "react";
import { Fruit } from "../types/Fruit";
import { useFetchData } from "../hooks/useFetchData";
import Loader from "rsuite/Loader";
import "rsuite/Loader/styles/index.css";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import ThemedText from "../components/ThemedText/ThemedText";

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

  const displayedFruitCount: number | null = useMemo(() => {
    return filteredFruit?.filter(displayFruit).length || 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredFruit, input]);

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
              displayFruit(fruit) && <Card key={fruit.id} fruit={fruit} />
          )
        )}
      </div>
    </section>
  );
};

export default Yard;
