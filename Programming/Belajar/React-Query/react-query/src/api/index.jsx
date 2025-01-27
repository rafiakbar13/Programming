import axios from "axios";

export const getProducts = async () => {
  return await axios
    .get("https://dummyjson.com/products")
    .then((response) => response.data);
};

export const getProduct = async (id) => {
  return await axios
    .get(`https://dummyjson.com/products/${id}`)
    .then((response) => response.data);
};
