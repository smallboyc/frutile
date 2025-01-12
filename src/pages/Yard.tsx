import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "rsuite/Loader";
import "rsuite/Loader/styles/index.css";
import { Fruit } from "../types/Fruit";
import { useFetchData } from "../hooks/useFetchData";
import SearchBar from "../components/SearchBar";
import fruitsIcons from "../assets/fruitsIcons";

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
                <div key={fruit.id} className="fruit-item-container">
                  <img
                    src={
                      (fruitsIcons as Record<string, string>)[
                        fruit.name.toLocaleLowerCase()
                      ]
                    }
                    width={16}
                    height={16}
                    alt={fruit.name.toLocaleLowerCase()}
                  />
                  <p key={fruit.id}>{fruit.name}, </p>
                </div>
              )
          )
        )}
      </div>
    </>
  );
};

export default Yard;
