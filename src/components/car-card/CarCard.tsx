import { Car } from "@/types/Car";
import { Calendar, CarFront, User } from "lucide-react";
import { Button } from "../ui/button";

interface propsType {
  car: Car;
}

const CarCard = ({ car }: propsType) => {
  return (
    <div className="flex h-full flex-col rounded-md border shadow-sm">
      <img
        src={car.image}
        className="card-img-top car-image h-[220px] object-cover"
        alt="..."
      />
      <div className="mt-4 flex h-full flex-col p-2">
        <h6 className="text-2xl font-semibold">
          {car.manufacture} {car.model}
        </h6>
        <h5 className="text-md font-medium">
          Rp. {Number(car.rentPerDay).toLocaleString()} / hari
        </h5>
        <p className="my-2 grow">{car.description}</p>
        <span className="mb-2 flex text-sm font-light text-gray-400">
          <User className="me-2 h-4 w-4" /> {car.capacity} orang
        </span>
        <span className="mb-2 flex text-sm font-light text-gray-400">
          <CarFront className="me-2 h-4 w-4" /> {car.transmission}
        </span>
        <span className="mb-4 flex text-sm font-light text-gray-400">
          <Calendar className="me-2 h-4 w-4" /> Tahun {car.year}
        </span>
        <Button
          size={"sm"}
          className="btn btn-primary w-100 mt-auto"
          disabled={!car.available}
        >
          Pilih Mobil
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
