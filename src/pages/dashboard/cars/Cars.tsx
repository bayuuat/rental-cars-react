import { useFetchCars } from "@/api/cars/useFetchCars";
import { DataTable } from "./table/data-table";
import { columns } from "./table/column";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cars = () => {
  const { data, isFetchedAfterMount } = useFetchCars();

  return (
    <div>
      <div className="mb-6 flex justify-between">
        <h2 className="text-2xl font-semibold">Cars Page</h2>
        <Link to="/dashboard/cars/add">
          <Button size={"sm"}>Add new car</Button>
        </Link>
      </div>
      {isFetchedAfterMount && data && (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  );
};

export default Cars;
