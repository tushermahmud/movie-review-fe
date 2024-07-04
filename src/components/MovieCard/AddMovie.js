"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import useAllAPI from "@/context/API/allAPI";

const AddMovieForm = ({ setTriggerUpload }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { addMovie } = useAllAPI();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addMovie(data).then((res) => {
      setTriggerUpload(Math.random());
      console.log(res.json);
    });
    // Here you would typically make an API call to your backend to add the movie
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button onClick={() => setIsOpen(true)} color="primary">
            Add Movie
          </button>
        </DialogTrigger>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Add Movie</DialogTitle>
          <DialogDescription>
            Fill in the details of the movie you want to add.
          </DialogDescription>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md placeholder-gray-400"
                    placeholder="Enter movie name"
                  />
                )}
              />
              {errors.name && (
                <span className="text-red-400 text-xs">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="description"
              >
                Description
              </label>
              <Controller
                name="description"
                control={control}
                rules={{ required: "Description is required" }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md placeholder-gray-400"
                    placeholder="Enter movie description"
                  />
                )}
              />
              {errors.description && (
                <span className="text-red-400 text-xs">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="runningTime"
              >
                Running Time
              </label>
              <Controller
                name="runningTime"
                control={control}
                rules={{
                  required: "Running time is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Running time must be a number",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md placeholder-gray-400"
                    placeholder="Enter running time"
                  />
                )}
              />
              {errors.runningTime && (
                <span className="text-red-400 text-xs">
                  {errors.runningTime.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="thumbnail"
              >
                Thumbnail URL
              </label>
              <Controller
                name="thumbnail"
                control={control}
                rules={{ required: "Thumbnail URL is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md placeholder-gray-400"
                    placeholder="Enter thumbnail URL"
                  />
                )}
              />
              {errors.thumbnail && (
                <span className="text-red-400 text-xs">
                  {errors.thumbnail.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="rating"
              >
                Rating
              </label>
              <Controller
                name="rating"
                control={control}
                rules={{ required: "Rating is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md placeholder-gray-400"
                    placeholder="Enter movie rating"
                  />
                )}
              />
              {errors.rating && (
                <span className="text-red-400 text-xs">
                  {errors.rating.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="duration"
              >
                Duration
              </label>
              <Controller
                name="duration"
                control={control}
                rules={{ required: "Duration is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md placeholder-gray-400"
                    placeholder="Enter movie duration"
                  />
                )}
              />
              {errors.duration && (
                <span className="text-red-400 text-xs">
                  {errors.duration.message}
                </span>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mr-2"
              >
                Cancel
              </button>
              <button type="submit" color="primary">
                Add Movie
              </button>
            </div>
          </form>
        </DialogContent>
        <DialogClose />
      </Dialog>
    </>
  );
};

export default AddMovieForm;
