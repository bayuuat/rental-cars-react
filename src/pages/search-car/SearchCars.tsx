import { Navbar } from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SelectWaktu from "./components/SelectWaktu";
import { DatePicker } from "../../components/form/DatePicker";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import SelectCarType from "../../components/form/SelectCarType";
import { Car } from "@/types/Car";
import CarCard from "@/components/car-card/CarCard";
import { useFetchCars } from "@/api/cars/useFetchCars";
import { useState } from "react";

interface FormValues {
  type: string;
  date: Date;
  time: Date;
  passanger: number;
}

const SearchCars = () => {
  const [search, setSearch] = useState<FormValues>();
  const { handleSubmit, control } = useForm<FormValues>();

  const { data, error: carError, isFetchedAfterMount } = useFetchCars(search);

  const onSubmit = async (data: FormValues) => {
    setSearch(data);
  };

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b ">
          <div className="container flex h-16 items-center px-4">
            <a href="#home">
              <div className="h-[34px] w-[100px] bg-zinc-800"></div>
            </a>
            <div className="ml-auto flex items-center space-x-4">
              <Navbar className="mx-6" />
            </div>
          </div>
        </div>
      </div>
      <article>
        <section className="bg-[#F1F3FF]" id="hero">
          <div id="home" className="relative">
            <div className="container flex min-h-[600px] items-center">
              <div className="home-content w-1/2 self-center">
                <h2 className="mb-4 text-4xl font-bold">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h2>
                <p className="mb-5">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
              </div>
              <img
                className="absolute bottom-0 end-0 max-h-[407px] w-auto"
                src="https://i.ibb.co/xfn2L6m/img-car.png"
              />
            </div>
          </div>
        </section>

        <div className="container relative z-20">
          <section className="-mt-12 rounded-md bg-white p-4 shadow-md">
            <form
              className="flex items-center justify-center gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-1/4">
                <Label>Tipe Mobil</Label>
                <Controller
                  name="type"
                  control={control}
                  rules={{ required: "Tipe is required" }}
                  render={({ field }) => <SelectCarType field={field} />}
                />
              </div>
              <div className="w-1/4">
                <Label>Tanggal</Label>
                <Controller
                  name="date"
                  control={control}
                  defaultValue={new Date()}
                  rules={{ required: "Tanggal is required" }}
                  render={({ field }) => <DatePicker field={field} />}
                />
              </div>
              <div className="w-1/4">
                <Label>Waktu Jemput / Ambil</Label>
                <Controller
                  name="time"
                  control={control}
                  rules={{ required: "Waktu ambil is required" }}
                  render={({ field }) => <SelectWaktu field={field} />}
                />
              </div>
              <div className="w-1/4">
                <Label>Jumlah Penumpang</Label>
                <Controller
                  name="passanger"
                  control={control}
                  defaultValue={1}
                  rules={{ required: "Passanger is required" }}
                  render={({ field }) => (
                    <Input type="number" min="1" max="10" {...field} />
                  )}
                />
              </div>
              <Button type="submit" className="self-end">
                Cari Mobil
              </Button>
            </form>
          </section>

          {!isFetchedAfterMount ? (
            <p className="my-8 h-screen w-full bg-gray-200 p-6 text-center">
              Loading...
            </p>
          ) : (
            <>
              {!data && (
                <p className="my-8 w-full bg-gray-200 p-6 text-center">
                  Tidak ada mobil yang tersedia.
                </p>
              )}
              {!!data && data?.length > 0 && (
                <section
                  id="filterResults"
                  className="mt-5 grid grid-cols-3 gap-4"
                >
                  {data.map((car: Car) => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </section>
              )}
              {carError && <p>Something went wrong!</p>}
            </>
          )}
        </div>
      </article>
    </>
  );
};

export default SearchCars;
