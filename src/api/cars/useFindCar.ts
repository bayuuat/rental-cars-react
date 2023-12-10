import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFindCar = (id: string) => {
  const { data, error, isFetching, isFetchedAfterMount } = useQuery({
    queryKey: ["findCar"],
    queryFn: async () => {
      const response = await axiosClient.get(`/api/cars/${id}`);
      return response.data;
    },
  });

  return { data, error, isFetching, isFetchedAfterMount };
};
