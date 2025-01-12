import { Fruit } from "../types/Fruit";
import fruitsIcons from "../assets/fruitsIcons";

const Card = ({ fruit }: { fruit: Fruit }) => {
  return (
    <div key={fruit.id} className="fruit-item-container">
      <div className="fruit-item">
        <img
          src={
            (fruitsIcons as Record<string, string>)[
              fruit.name.toLocaleLowerCase()
            ]
          }
          width={64}
          height={64}
          alt={fruit.name.toLocaleLowerCase()}
        />
        <p className="fruit-name" key={fruit.id}>{fruit.name}</p>
      </div>
    </div>
  );
};

export default Card;
