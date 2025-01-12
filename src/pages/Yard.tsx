import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "rsuite/Loader";
import "rsuite/Loader/styles/index.css";
import { Fruit } from "../types/Fruit";
import { useFetchData } from "../hooks/useFetchData";
import SearchBar from "../components/SearchBar";

const Yard = () => {
  const { data, loading } = useFetchData("api/fruit/all");
  const [input, setInput] = useState("");
  return (
    <>
      <h1>Hello Yard !</h1>
      <NavLink to="/">Home</NavLink>
      <SearchBar input={input} setInput={setInput} />
      <div className="fruits-container">
        {loading ? (
          <Loader size="sm" speed="slow" content="Chargement de la data..." />
        ) : (
          data?.map(
            (fruit: Fruit) =>
              fruit.name
                .toLocaleLowerCase()
                .startsWith(input.toLocaleLowerCase()) && (
                <p key={fruit.id}>{fruit.name}, </p>
              )
          )
        )}
      </div>
    </>
  );
};

export default Yard;
