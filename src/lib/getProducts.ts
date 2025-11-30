export const getProducts = async () => {
  const url = "https://dummyjson.com/products";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Błąd HTTP! Status: ${response.status}`);
    }

    const data = response.json();
    return data;
  } catch (err) {
    console.error("Nie udało się pobrać produktów", err);
    return [];
  }
};
