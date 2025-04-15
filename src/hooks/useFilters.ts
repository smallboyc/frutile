import { useState, useMemo } from "react";
import { Fruit } from "../types/props";

export const useFilters = (data: Fruit[] | null) => {
  const [familyFilters, setFamilyFilters] = useState<string[]>([]);
  const [orderFilters, setOrderFilters] = useState<string[]>([]);
  const [genusFilters, setGenusFilters] = useState<string[]>([]);
  const [nutritionFilters, setNutritionFilters] = useState<string[]>([]);

  //get all family filter
  const familyFruits = useMemo(() => {
    const uniqueFamilies: string[] = [];
    data?.forEach((fruit: Fruit) => {
      if (!uniqueFamilies.includes(fruit.family)) {
        uniqueFamilies.push(fruit.family);
      }
    });
    return uniqueFamilies;
  }, [data]);

  //get all order filter
  const orderFruits = useMemo(() => {
    const uniqueOrders: string[] = [];
    data?.forEach((fruit: Fruit) => {
      if (!uniqueOrders.includes(fruit.order)) {
        uniqueOrders.push(fruit.order);
      }
    });
    return uniqueOrders;
  }, [data]);

  //get all genus filter
  const genusFruits = useMemo(() => {
    const uniqueGenera: string[] = [];
    data?.forEach((fruit: Fruit) => {
      if (!uniqueGenera.includes(fruit.genus)) {
        uniqueGenera.push(fruit.genus);
      }
    });
    return uniqueGenera;
  }, [data]);

  //set all nutrition parameters. (static)
  const nutritionFruits: string[] = [
    "calories",
    "fat",
    "sugar",
    "carbohydrates",
    "protein",
  ];

  return {
    familyFilters,
    setFamilyFilters,
    orderFilters,
    setOrderFilters,
    genusFilters,
    setGenusFilters,
    nutritionFilters,
    setNutritionFilters,
    familyFruits,
    orderFruits,
    genusFruits,
    nutritionFruits,
  };
};
