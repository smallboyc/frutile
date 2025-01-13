import { useState } from "react";
import Loader from "rsuite/Loader";
import "rsuite/Loader/styles/index.css";
import { Fruit } from "../types/Fruit";
import { useFetchData } from "../hooks/useFetchData";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

const Yard = () => {
  const { data, loading } = useFetchData("api/fruit/all");
  const [input, setInput] = useState("");
  // const [displayDataCount, setDisplayDataCount] = useState<number | null>(data?.length | null)

  const hiddenFruitList: number[] = [65, 66, 95, 101, 104];
  const filteredFruit: Fruit[] | undefined = data?.filter(
    (fruit: Fruit) => !hiddenFruitList.includes(fruit.id)
  );

  return (
    <>
      <SearchBar input={input} setInput={setInput} />
      <div className="fruits-container">
        {loading ? (
          <Loader size="sm" speed="slow" content="Chargement de la data..." />
        ) : (
          filteredFruit?.map(
            (fruit: Fruit) =>
              fruit.name
                .toLocaleLowerCase()
                .startsWith(input.toLocaleLowerCase()) && (
                <Card key={fruit.id} fruit={fruit} />
              )
          )
        )}
      </div>
    </>
  );
};

export default Yard;
