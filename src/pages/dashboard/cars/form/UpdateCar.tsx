import CreateCar, { FormValuesCars } from "./CreateCar";
import { useParams } from "react-router-dom";
import { useFindCar } from "@/api/cars/useFindCar";

const UpdateCar = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isFetchedAfterMount } = useFindCar(id!);

  const transformData = (data: FormValuesCars) => {
    // Assuming 'dateString' is the property you want to transform
    const transformedData = {
      ...data,
      availableAt: new Date(data.availableAt),
    };

    return transformedData;
  };

  return (
    <>
      <div className="mb-6 text-2xl font-semibold">UpdateCar</div>
      {isFetchedAfterMount && data && (
        <CreateCar initialValue={transformData(data)} />
      )}
      {error && <p>{error.message}</p>}
    </>
  );
};

export default UpdateCar;
