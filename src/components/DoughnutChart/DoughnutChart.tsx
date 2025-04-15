import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useMemo } from "react";
import { generateRandomColor } from "../../utils/utils";
import { DoughnutProps } from "../../types/props";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ dataFruit, nutritionFilters }: DoughnutProps) => {

  const WEIGHTS = {
    calories: 0.2,
    fat: 0.3,
    sugar: 0.4,
    carbohydrates: 0.3,
    protein: -0.2,
  };

  const processedData = useMemo(() => {
    if (!dataFruit) return [];

    if (!nutritionFilters.length) {
      return dataFruit.map((fruit) => ({
        name: fruit.name,
        nutritionScore:
          WEIGHTS.calories * fruit.nutritions.calories +
          WEIGHTS.fat * fruit.nutritions.fat +
          WEIGHTS.sugar * fruit.nutritions.sugar +
          WEIGHTS.carbohydrates * fruit.nutritions.carbohydrates +
          WEIGHTS.protein * fruit.nutritions.protein,
        color: generateRandomColor(),
      }));
    }

    const selectedNutrition = nutritionFilters[0];
    return dataFruit.map((fruit) => ({
      name: fruit.name,
      nutritionScore:
        fruit.nutritions[selectedNutrition as keyof typeof fruit.nutritions],
      color: generateRandomColor(),
    }));
  }, [
    WEIGHTS.calories,
    WEIGHTS.carbohydrates,
    WEIGHTS.fat,
    WEIGHTS.protein,
    WEIGHTS.sugar,
    dataFruit,
    nutritionFilters,
  ]);

  const data = {
    labels: processedData.map((item) => item.name),
    datasets: [
      {
        label:
          nutritionFilters.length === 0
            ? "Score nutritionnel"
            : nutritionFilters[0],
        data: processedData.map((item) => item.nutritionScore),
        backgroundColor: processedData.map((item) => item.color),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<"doughnut">) => {
            const value =
              typeof tooltipItem.raw === "number"
                ? tooltipItem.raw.toFixed(2)
                : "0";
            return `${tooltipItem.label}: ${value}`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
