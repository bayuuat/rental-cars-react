import { useDeleteCar } from "@/api/cars/useDeleteCar";
import { handleMutationError } from "@/api/handler/handleMutationError";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";

interface propType {
  id: number;
}

const DeleteDialog = ({ id }: propType) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useDeleteCar({
    id,
    onSuccess() {
      toast({
        variant: "success",
        title: "Success Delete Data!",
      });
      queryClient.invalidateQueries({ queryKey: ["getCars"] });
    },
    onError(error) {
      handleMutationError(error, toast);
    },
  });

  const handleDelete = async () => {
    try {
      await mutateAsync();
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-md bg-red-200 p-0 text-sm font-medium text-zinc-900 ring-offset-white transition-colors hover:bg-red-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-800 dark:text-zinc-50 dark:ring-offset-zinc-950 dark:hover:bg-zinc-800/80 dark:focus-visible:ring-zinc-300">
        <Trash className="h-4 w-4" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the car
            and remove the data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-500"
            onClick={handleDelete}
            disabled={isPending}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
