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

  return (
    <>
      <SearchBar input={input} setInput={setInput} />
      <div className="fruits-container">
        {loading ? (
          <Loader size="sm" speed="slow" content="Chargement de la data..." />
        ) : (
          data?.map(
            (fruit: Fruit) =>
              fruit.name
                .toLocaleLowerCase()
                .startsWith(input.toLocaleLowerCase()) && <Card fruit={fruit} />
          )
        )}
      </div>
    </>
  );
};

export default Yard;
