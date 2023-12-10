import { usePostCars } from "@/api/cars/usePostCars";
import { useUpdateCar } from "@/api/cars/useUpdateCar";
import { DatePicker } from "@/components/form/DatePicker";
import FileDropZone from "@/components/form/FileDrop";
import SelectCarType from "@/components/form/SelectCarType";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export interface FormValuesCars {
  plate: string;
  manufacture: string;
  image: string;
  model: string;
  type: string;
  description: string;
  transmission: string;
  capacity: number;
  rentPerDay: number;
  availableAt: Date;
  available: boolean;
  year: number;
  options: string[];
  specs: string[];
}

interface propsType {
  initialValue?: FormValuesCars;
}

const CreateCar = ({ initialValue }: propsType) => {
  const { id: idCar } = useParams<{ id: string }>();

  const form = useForm<FormValuesCars>({
    defaultValues: initialValue || {
      available: true,
      availableAt: new Date(),
      capacity: 0,
      description: "",
      image: "",
      manufacture: "",
      model: "",
      plate: "",
      rentPerDay: 0,
      transmission: "",
      type: "",
      year: 0,
      options: [
        "CD (Multi Disc)",
        "Keyless Entry",
        "Cassette Player",
        "Power Windows",
        "Rear Window Wiper",
        "CD (Single Disc)",
        "Third Row Seats",
      ],
      specs: [
        "Rear reading & courtesy lamps",
        "Zone body construction -inc front/rear crumple zones, hood deformation point",
        "4-wheel/4-channel anti-lock brake system (ABS)",
        "Anti-lock 4-wheel performance disc brakes",
        "200mm front axle",
        "Dual front knee airbags",
      ],
    },
  });

  const childRef = useRef<{
    handleChildFunction: () => string | Promise<string>;
  } | null>(null);

  const { mutateAsync, isPending } = usePostCars({ ref: childRef });
  const { mutateAsync: updateData, isPending: isUpdating } = useUpdateCar({
    ref: childRef,
    id: idCar,
  });

  const onSubmit = async (data: FormValuesCars) => {
    initialValue ? updateData(data) : mutateAsync(data);
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 grid-rows-5 gap-4">
          <div>
            <Label>Manufacture</Label>
            <Controller
              name="manufacture"
              control={form.control}
              rules={{ required: "Manufacture is required" }}
              render={({ field }) => (
                <Input type="text" placeholder="eg. BMW" {...field} />
              )}
            />
            {form.formState.errors.manufacture && (
              <p className="mb-2 text-xs text-red-400">
                {form.formState.errors.manufacture.message}
              </p>
            )}
          </div>
          <div>
            <Label>Model</Label>
            <Controller
              name="model"
              control={form.control}
              rules={{ required: "Model is required" }}
              render={({ field }) => (
                <Input type="text" placeholder="eg. Laverage" {...field} />
              )}
            />
            {form.formState.errors.model && (
              <p className="mb-2 text-xs text-red-400">
                {form.formState.errors.model.message}
              </p>
            )}
          </div>
          <div>
            <Label>Plate</Label>
            <Controller
              name="plate"
              control={form.control}
              rules={{ required: "Plate is required" }}
              render={({ field }) => (
                <Input type="text" placeholder="eg. PLS-1234" {...field} />
              )}
            />
            {form.formState.errors.plate && (
              <p className="mb-2 text-xs text-red-400">
                {form.formState.errors.plate.message}
              </p>
            )}
          </div>
          <div>
            <Label>Type</Label>
            <Controller
              name="type"
              control={form.control}
              rules={{ required: "Type is required" }}
              render={({ field }) => (
                <Input type="text" placeholder="eg. Pickup" {...field} />
              )}
            />
            {form.formState.errors.type && (
              <p className="mb-2 text-xs text-red-400">
                {form.formState.errors.type.message}
              </p>
            )}
          </div>
          <div>
            <Label>Year</Label>
            <Controller
              name="year"
              control={form.control}
              rules={{ required: "Year is required" }}
              render={({ field }) => (
                <Input type="number" placeholder="eg. 2022" {...field} />
              )}
            />
            {form.formState.errors.year && (
              <p className="mb-2 text-xs text-red-400">
                {form.formState.errors.year.message}
              </p>
            )}
          </div>
          <div>
            <Label>Transmisiion</Label>
            <Controller
              name="transmission"
              control={form.control}
              rules={{ required: "Transmission is required" }}
              render={({ field }) => <SelectCarType field={field} />}
            />
            {form.formState.errors.transmission && (
              <p className="mb-2 text-xs text-red-400">
                {form.formState.errors.transmission.message}
              </p>
            )}
          </div>
          <div>
            <Label>Capacity</Label>
            <Controller
              name="capacity"
              control={form.control}
              rules={{ required: "Capacity is required" }}
              render={({ field }) => <Input type="number" {...field} />}
            />
            {form.formState.errors.capacity && (
              <p className="mb-2 text-xs text-red-400">
                {form.formState.errors.capacity.message}
              </p>
            )}
          </div>
          <div className="row-span-3 flex flex-col">
            <Label>Description</Label>
            <Controller
              name="description"
              control={form.control}
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <Textarea
                  placeholder="Tell more about your car..."
                  className="mt-2 h-full resize-none"
                  {...field}
                />
              )}
            />
            {form.formState.errors.description && (
              <p className="mb-2 text-xs text-red-400">
                {form.formState.errors.description.message}
              </p>
            )}
          </div>
          <div className="row-span-3 flex flex-col">
            <Label className="mb-2">Image</Label>
            <FileDropZone form={form} ref={childRef} />
            {form.formState.errors.image && (
              <p className="mb-2 text-xs text-red-400">
                {form.formState.errors.image.message}
              </p>
            )}
          </div>
          <div>
            <Label>Rent Price</Label>
            <Controller
              name="rentPerDay"
              control={form.control}
              rules={{ required: "Rent Price is required" }}
              render={({ field }) => <Input type="number" {...field} />}
            />
            {form.formState.errors.rentPerDay && (
              <p className="mb-2 text-xs text-red-400">
                {form.formState.errors.rentPerDay.message}
              </p>
            )}
          </div>
          <div>
            <Label>Available At</Label>
            <Controller
              name="availableAt"
              control={form.control}
              rules={{ required: "Date is required" }}
              render={({ field }) => <DatePicker field={field} />}
            />
            {form.formState.errors.availableAt && (
              <p className="mb-2 text-xs text-red-400">
                {form.formState.errors.availableAt.message}
              </p>
            )}
          </div>
        </div>
        <div className="fixed bottom-0 w-full py-4">
          <Button
            type="submit"
            className="w-40"
            disabled={isPending || isUpdating}
          >
            {(isPending || isUpdating) && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateCar;
