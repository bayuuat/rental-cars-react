import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

export const useFetchCars = (form: any) => {
  let params = new URLSearchParams(); // Declare params at the top level

  if (form) {
    const formatedData = { ...form, date: format(form?.date, "yyyy-MM-dd") };
    params = new URLSearchParams(formatedData);
  }

  const { data, error, isFetchedAfterMount } = useQuery({
    queryKey: ["getCars", form],
    queryFn: async () => {
      const response = await axiosClient.get("/api/cars", { params });
      return response.data;
    },
  });

  return { data, error, isFetchedAfterMount };
};
