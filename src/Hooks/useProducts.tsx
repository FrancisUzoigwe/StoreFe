import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/API";

export const useProduct = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { data, isLoading };
};
