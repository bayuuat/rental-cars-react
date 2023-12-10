import { Button } from "@/components/ui/button";
import { Car } from "@/types/Car";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import DeleteDialog from "./DeleteDialog";

export const columns: ColumnDef<Car>[] = [
  {
    header: "Name",
    cell: ({ row }) => {
      const car = row.original;
      return (
        <div className="font-semibold">
          {car.manufacture} {car.model}
        </div>
      );
    },
  },
  {
    header: "Description",
    cell: ({ row }) => {
      const car = row.original;
      return <div className="w-[420px] text-justify">{car.description}</div>;
    },
  },
  {
    accessorKey: "rentPerDay",
    header: "Price",
    cell: ({ row }) => {
      const amount = row.getValue("rentPerDay");
      return <div>Rp. {Number(amount).toLocaleString()}</div>;
    },
  },
  {
    header: "Available",
    cell: ({ row }) => {
      const car = row.original;
      const formatDate = (timestamp: string) => {
        const date = new Date(timestamp);
        return format(date, "dd/MM/yy HH:mm");
      };

      return <div>{formatDate(car.availableAt)}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const car = row.original;

      return (
        <div className="flex gap-3">
          <Link to={`/dashboard/cars/${car.id}`}>
            <Button variant="secondary" className="h-8 w-8 p-0">
              <Pencil className="h-4 w-4" />
            </Button>
          </Link>
          <DeleteDialog id={car.id} />
        </div>
      );
    },
  },
];
