import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import fetchFruits from "../api/fetchData";
import { Fruit } from "../types/Fruit";

const Yard = () => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFruits = async () => {
      try {
        const data = await fetchFruits();
        setFruits(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getFruits();
  }, []);

  return (
    <>
      <h1 className="leckerli-one-regular">Hello Yard !</h1>
      <NavLink to="/">Home</NavLink>
      {loading ? (
        <p>Loading fruits...</p>
      ) : (
        fruits.map((fruit: Fruit) => <p key={fruit.id}>{fruit.name}</p>)
      )}
    </>
  );
};

export default Yard;
