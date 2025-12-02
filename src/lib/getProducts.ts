const url = "https://dummyjson.com/products";
export const getProducts = async () => {
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

export const getSingleProduct = async (id: string) => {
  try {
    const response = await fetch(`${url}/${id}`);

    if (!response.ok) {
      throw new Error(`Błąd HTTP! Status ${response.status}`);
    }
    const data = response.json();
    return data;
  } catch (err) {
    console.error("Nie udało się pobrać produktu: ", err);
    return [];
  }
};
