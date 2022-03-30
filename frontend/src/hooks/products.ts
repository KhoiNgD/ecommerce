import { useQuery } from "react-query";
import { IProduct } from "helpers/types";
import apiClient from "utils/apiClient";

function useProducts(category: string) {
  const { data: products } = useQuery<IProduct[]>(
    ["products", category],
    async function () {
      try {
        const res = await apiClient.get(`/products/${category}`);
        return res.data;
      } catch (error) {
        throw new Error("Cannot fetch data");
      }
    }
  );
  return products;
}

function useProduct(category: string, productName: string) {
  const { data: product } = useQuery<IProduct>(
    ["product", productName],
    async function () {
      try {
        const res = await apiClient.get(`/products/${category}/${productName}`);
        return res.data;
      } catch (error) {
        throw new Error("Cannot fetch data");
      }
    }
  );
  return product;
}

export { useProducts, useProduct };
