import Loader from "rsuite/Loader";
import Card from "../Card/Card";
import { FruitProps } from "../../types/props";
import { Fruit } from "../../types/api";
import "./Fruits.css";

const Fruits = ({
  filteredDataFruits,
  loading,
  setSelectedFruit,
}: FruitProps) => {
  return (
    <div className="fruits-container">
      {loading ? (
        <Loader size="sm" speed="slow" content="Chargement de la data..." />
      ) : (
        filteredDataFruits?.map((fruit: Fruit) => (
          <Card
            key={fruit.id}
            fruit={fruit}
            OnClick={() => setSelectedFruit && setSelectedFruit(fruit)}
          />
        ))
      )}
    </div>
  );
};

export default Fruits;
