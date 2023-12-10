import { UploadCloud } from "lucide-react";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormValuesCars } from "@/pages/dashboard/cars/form/CreateCar";

import axios from "axios";
interface propsType {
  className?: string;
  form: UseFormReturn<FormValuesCars, undefined, undefined>;
}

interface Methods {
  // Define methods that can be called from the parent
  handleChildFunction: () => void;
}

const FileDropZone: React.ForwardRefRenderFunction<Methods, propsType> = (
  { className, form },
  ref,
) => {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();
  const thumbnail = form.getValues("image");
  const preset = import.meta.env.VITE_CLDR_PRESET;
  const cloudName = import.meta.env.VITE_CLDR_NAME;

  useEffect(() => {}, [thumbnail]);

  const handleChildFunction = async () => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
      formData.append("upload_preset", preset);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
      );
      return response.data.secure_url;
    }
    return;
  };

  useImperativeHandle(ref, () => ({
    handleChildFunction,
  }));

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!e.dataTransfer.files || e.dataTransfer.files.length === 0) {
      form.setValue("image", "");
      setFile(undefined);
      return;
    }

    form.setValue("image", URL.createObjectURL(e.dataTransfer.files[0]));
    setFile(e.dataTransfer.files[0]);
    setDragging(false);
  };

  const removeItem = () => {
    form.setValue("image", "");
    setFile(undefined);
  };

  return (
    <>
      {thumbnail !== "" ? (
        <div className="relative h-48 w-48 rounded-md border shadow-md dark:border-gray-900">
          <Button
            type="button"
            className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-red-500 text-center text-white"
            onClick={removeItem}
          >
            X
          </Button>
          <img
            className="mr-4 h-full w-full rounded-md object-cover"
            src={String(thumbnail)}
            alt={`Image Preview`}
          />
        </div>
      ) : (
        <div
          className={`file-drop-zone box-content flex h-full w-full items-center justify-center ${
            dragging ? "dragging" : ""
          }`}
          onDragEnter={handleDragEnter}
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <label
            htmlFor="dropzone-file"
            className={`dark:hover:bg-bray-800 dark:bg-navy-700 dark:hover:border-navy-100 dark:hover:bg-navy-700/70 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100  dark:border-gray-600 ${className}`}
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <UploadCloud className="mb-2 h-9 w-9 text-gray-500 dark:text-gray-400" />
              {dragging ? (
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  Drop your files here
                </p>
              ) : (
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-200">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-300">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <Controller
              name="image"
              control={form.control}
              rules={{ required: "Image is required" }}
              render={({ field }) => (
                <Input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      field.onChange(URL.createObjectURL(e.target.files[0]));
                      setFile(e.target.files[0]);
                    }
                  }}
                  accept=".jpg,.jpeg,.png"
                />
              )}
            />
          </label>
        </div>
      )}
    </>
  );
};

export default forwardRef(FileDropZone);
