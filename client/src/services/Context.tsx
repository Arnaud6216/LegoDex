import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { CategoryProps } from "../types/vite-env";
import type { LegoSetProps } from "../types/vite-env";
interface ContextType {
  categories: CategoryProps[];
  setCategories: React.Dispatch<React.SetStateAction<CategoryProps[]>>;
  legoSets: LegoSetProps[];
  setLegoSets: React.Dispatch<React.SetStateAction<LegoSetProps[]>>;
  actualCategoryId: number | null;
  setActualCategoryId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Context = createContext<ContextType>({
  categories: [],
  setCategories: () => {},
  legoSets: [],
  setLegoSets: () => {},
  actualCategoryId: null,
  setActualCategoryId: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  const [actualCategoryId, setActualCategoryId] = useState<number | null>(null);

  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [legoSets, setLegoSets] = useState<LegoSetProps[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/category`)
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) =>
        console.error("Erreur de récupération des catégories", error),
      );
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      for (const category of categories) {
        fetch(`${import.meta.env.VITE_API_URL}/api/legoset/${category.id}`)
          .then((response) => response.json())
          .then((data) => {
            setLegoSets((prevLegoSets) => [...prevLegoSets, ...data]);
          })
          .catch((error) =>
            console.error("Erreur de récupération des legosets", error),
          );
      }
    }
  }, [categories]);
  //-----------------------------------------------------------

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        legoSets,
        setLegoSets,
        actualCategoryId,
        setActualCategoryId,
      }}
    >
      {children}
    </Context.Provider>
  );
};
