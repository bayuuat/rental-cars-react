import axiosClient from "@/lib/axios";
import { ApiError } from "@/types/ApiError";
import { useMutation } from "@tanstack/react-query";

interface propsType {
  id: number;
  onSuccess: () => void;
  onError: (error: ApiError) => void;
}

export const useDeleteCar = ({ id, onSuccess, onError }: propsType) => {
  const { mutateAsync, error, isPending } = useMutation({
    mutationKey: ["deleteCar"],
    mutationFn: async () => {
      const response = await axiosClient.delete(`/api/cars/${id}`);
      return response.data;
    },
    onSuccess,
    onError,
  });

  return { mutateAsync, error, isPending };
};
