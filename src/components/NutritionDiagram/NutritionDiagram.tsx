import { NutritionDiagramProps } from "../../types/props";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import "./NutritionDiagram.css";


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
