export type Nutritions = {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
};

export type Fruit = {
  id: number;
  name: string;
  family: string;
  order: string;
  genus: string;
  nutritions: Nutritions;
};


export type useFilterProps = {
  familyFruits: string[];
  orderFruits: string[];
  genusFruits: string[];
  nutritionFruits: string[];
  setFamilyFilters: React.Dispatch<React.SetStateAction<string[]>>;
  setOrderFilters: React.Dispatch<React.SetStateAction<string[]>>;
  setGenusFilters: React.Dispatch<React.SetStateAction<string[]>>;
  setNutritionFilters: React.Dispatch<React.SetStateAction<string[]>>;
}