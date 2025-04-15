import { Fruit } from "./api";

export type useFilterProps = {
  familyFruits: string[];
  orderFruits: string[];
  genusFruits: string[];
  nutritionFruits: string[];
  setFamilyFilters: React.Dispatch<React.SetStateAction<string[]>>;
  setOrderFilters: React.Dispatch<React.SetStateAction<string[]>>;
  setGenusFilters: React.Dispatch<React.SetStateAction<string[]>>;
  setNutritionFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

export type ButtonProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick: () => void;
};

export type CardProps = {
  fruit: Fruit;
  OnClick: () => void;
};

export type DoughnutProps = {
  dataFruit: Fruit[] | undefined;
  nutritionFilters: string[];
};

export type DropdownProps = {
  filters?: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  filterType: string;
};

export type FilterProps = {
  selectedFilterParent: string[] | null;
  setSelectedFilterParent: React.Dispatch<
    React.SetStateAction<string[] | null>
  >;
  fruitFilters: useFilterProps;
};

export type FruitProps = {
  filteredDataFruits: Fruit[] | undefined;
  loading?: boolean;
  setSelectedFruit?: React.Dispatch<React.SetStateAction<Fruit | null>>;
};

export type ModalProps = {
  fruit: Fruit;
  closeModal: () => void;
};

export type NutritionDiagramProps = {
  filteredDataFruits: Fruit[] | undefined;
  nutritionFilters: string[];
};

export type SearchBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export type ThemedTextProps = {
  children: React.ReactNode;
  variant?: "bigTitle" | "title" | "text";
  color?: "black" | "grey" | "white";
};
