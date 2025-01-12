import { NavLink } from "react-router-dom";
import Loader from "rsuite/Loader";
import "rsuite/Loader/styles/index.css";
import { Fruit } from "../types/Fruit";
import { useFetchData } from "../hooks/useFetchData";

const Yard = () => {
  const { data, loading } = useFetchData("api/fruit/all");
  return (
    <>
      <h1>Hello Yard !</h1>
      <NavLink to="/">Home</NavLink>
      {loading ? (
        <Loader size="sm" speed="slow" content="Chargement de la data..." />
      ) : (
        data?.map((fruit: Fruit) => (
          <p key={fruit.id}>
            {fruit.name} & sugar = {fruit.nutritions.sugar}
          </p>
        ))
      )}
    </>
  );
};

export default Yard;
