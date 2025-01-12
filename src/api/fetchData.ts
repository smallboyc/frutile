const fetchFruits = async () => {
  try {
    const response = await fetch("api/fruit/all");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch {
    throw new Response("Failed to load data", { status: 500 });
  }
};

export default fetchFruits;
