import { useQuery } from "react-query";
import { Product } from "helpers/types";
import apiClient from "utils/apiClient";

function useProducts(category: string) {
  const { data: products } = useQuery<Product[]>("products", async function () {
    return await apiClient.get(`/products/${category}`);
  });
  return products;
}

function useProduct(category: string, productName: string) {
  const { data: product } = useQuery<Product>("product", async function () {
    return await apiClient.get(`/products/${category}/${productName}`);
  });
  return product;
}

export { useProducts, useProduct };
