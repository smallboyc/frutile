export interface Nutritions {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
}

export interface Fruit {
  id: number;
  name: string;
  family: string;
  order: string;
  genus: string;
  nutritions: Nutritions;
}
