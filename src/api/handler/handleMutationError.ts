import { ApiError } from "@/types/ApiError";

export const handleMutationError = (error: ApiError, toast: any) => {
  const response = error?.response;

  if (response?.data.message) {
    toast({
      variant: "destructive",
      title: response?.data.message,
    });
  } else {
    toast({
      variant: "destructive",
      title: "Service error! Please try again.",
    });
  }
};
