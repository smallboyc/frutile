import { Fruit } from "../../types/Fruit";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import "./NutritionDiagram.css";

type NutritionDiagramProps = {
  filteredDataFruits: Fruit[] | undefined;
  nutritionFilters: string[];
};

export const NutritionDiagram = ({
  filteredDataFruits,
  nutritionFilters,
}: NutritionDiagramProps) => {
  return (
    <div className="doughnut-container">
      <div className="doughnut">
        <DoughnutChart
          dataFruit={filteredDataFruits}
          nutritionFilters={nutritionFilters}
        />
      </div>
    </div>
  );
};
