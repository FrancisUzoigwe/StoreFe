import axios from "axios";

export const getProducts = async () => {
  try {
    return await axios.get(`${`https://fakestoreapi.com/products`}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
