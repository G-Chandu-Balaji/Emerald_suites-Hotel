import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { CreateCabin } from "../services/apiCabins";
import toast from "react-hot-toast";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;
  const querClient = useQueryClient();
  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: CreateCabin,
    onSuccess: () => {
      toast.success("Cabin created successfully");
      querClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    console.log(data);
    mutate(data);
  }
  function onError(errors) {
    console.log(errors);
  }
  return (
    <form
      className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg space-y-6"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      {/* Cabin Nunber */}

      <div className="flex items-center gap-4">
        <label
          htmlFor="cabinNumber"
          className="w-32 text-sm font-semibold text-gray-700"
        >
          cabinNumber
        </label>
        <input
          type="number"
          id="cabinNumber"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("cabinNumber", {
            required: "This field is required",
          })}
        />
        {errors?.cabinNumber?.message && (
          <p className="text-red-500">{errors.cabinNumber.message}</p>
        )}
      </div>
      {/* Cabin Name */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="name"
          className="w-32 text-sm font-semibold text-gray-700"
        >
          Cabin Name
        </label>
        <input
          type="text"
          id="name"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("name", {
            required: "This field is required",
          })}
        />
        {errors?.name?.message && (
          <p className="text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Max Capacity */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="maxCapacity"
          className="w-32 text-sm font-semibold text-gray-700"
        >
          Max Capacity
        </label>
        <input
          type="number"
          id="maxCapacity"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be atleast 1",
            },
          })}
        />
        {errors?.maxCapacity?.message && (
          <p className="text-red-500">{errors.maxCapacity.message}</p>
        )}
      </div>

      {/* Regular Price */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="regularPrice"
          className="w-32 text-sm font-semibold text-gray-700"
        >
          Regular Price
        </label>
        <input
          type="number"
          id="regularPrice"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("regularPrice", {
            required: "This field is required",
          })}
        />
        {errors?.regularPrice?.message && (
          <p className="text-red-500">{errors.regularPrice.message}</p>
        )}
      </div>

      {/* Discount */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="discount"
          className="w-32 text-sm font-semibold text-gray-700"
        >
          Discount
        </label>
        <input
          type="number"
          id="discount"
          defaultValue={0}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount must be less than Regular Price",
          })}
        />
        {errors?.discount?.message && (
          <p className="text-red-500">{errors.discount.message}</p>
        )}
      </div>

      {/* Description (textarea needs align-top) */}
      <div className="flex items-start gap-4">
        <label
          htmlFor="description"
          className="w-32 mt-1 text-sm font-semibold text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          className="flex-1 min-h-[100px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("description", {
            required: "This field is required",
          })}
        />
        {errors?.description?.message && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      {/* Image */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="image"
          className="w-32 text-sm font-semibold text-gray-700"
        >
          Image
        </label>
        <input
          id="image"
          //   accept="image/*"
          type="text"
          className="flex-1 px-2 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("images")}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="reset"
          className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isCreating}
          className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default CreateCabinForm;
