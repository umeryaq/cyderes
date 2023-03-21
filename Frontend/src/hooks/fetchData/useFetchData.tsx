import { useMutation } from "react-query";
import { fetchData } from "service/api";

export const useFetchData = () => {
  const { mutate, data, isLoading, error } = useMutation((query: string) =>
    fetchData(query),
  );

  return {
    mutate,
    data,
    isLoading,
    error,
  };
};
