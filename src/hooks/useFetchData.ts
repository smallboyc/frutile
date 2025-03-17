import { useState, useEffect } from "react";
import { Fruit } from "../types/Fruit";

export const useFetchData = (url: string) => {
  const [data, setData] = useState<Fruit[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${url} :(`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};