import axiosClient from "@/lib/axios";
import { FormValuesCars } from "@/pages/dashboard/cars/form/CreateCar";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useUpdateCar = ({ ref, id, onError }: any) => {
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: FormValuesCars) => {
      console.log(ref.current);

      if (ref.current) {
        try {
          const imageUrl = await ref.current.handleChildFunction();
          data.rentPerDay = Number(data.rentPerDay);
          data.image = imageUrl;
          const response = await axiosClient.patch(`/api/cars/${id}`, data);
          return response;
        } catch (error) {
          console.error(
            "Error calling async function in child component:",
            error,
          );
        }
      }
    },
    onSuccess: (data) => {
      if (data?.status === 201) {
        navigate("/dashboard/cars");
      }
    },
    onError,
  });

  return { mutateAsync, isPending };
};
