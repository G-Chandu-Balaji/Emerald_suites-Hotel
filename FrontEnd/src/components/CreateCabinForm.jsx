import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { CreateCabin, EditCabin } from "../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "./FormRow";

function CreateCabinForm({ editedCabin = {}, onSuccess }) {
  const { _id: editId, ...editValues } = editedCabin;
  let isEditing = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditing ? editValues : {},
  });
  const { errors } = formState;

  const queryClient = useQueryClient();

  //.....Create a new cabin.................
  const { mutate: creatingNewCabin, isPending: isCreating } = useMutation({
    mutationFn: CreateCabin,
    onSuccess: () => {
      toast.success("Cabin created successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  //..........Editing the Cabin.................
  const { mutate: EditingCabin, isPending: isUpdating } = useMutation({
    mutationFn: EditCabin,
    onSuccess: () => {
      toast.success("Cabin edited successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      if (onSuccess) onSuccess();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    if (isEditing) {
      EditingCabin({ id: editId, formdata: data });
    } else {
      creatingNewCabin(data);
    }
  }

  const isworking = isCreating || isUpdating;

  return (
    <div className="flex justify-center py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg space-y-6 flex flex-col gap-2 "
      >
        <h2 className="text-2xl font-bold self-start text-center mb-6">
          {isEditing ? "Edit Cabin" : "Create Cabin"}
        </h2>
        {/* Cabin Number */}
        <FormRow label="Cabin Number" error={errors?.cabinNumber?.message}>
          <input
            id="cabinNumber"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            {...register("cabinNumber", { required: "This field is required" })}
          />
        </FormRow>

        {/* Cabin Name */}
        <FormRow label="Cabin Name" error={errors?.name?.message}>
          <input
            id="name"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            {...register("name", { required: "This field is required" })}
          />
        </FormRow>

        {/* Max Capacity */}
        <FormRow label="Max Capacity" error={errors?.maxCapacity?.message}>
          <input
            id="maxCapacity"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            {...register("maxCapacity", {
              required: "This field is required",
              min: { value: 1, message: "Capacity should be at least 1" },
            })}
          />
        </FormRow>

        {/* Regular Price */}
        <FormRow label="Price" error={errors?.regularPrice?.message}>
          <input
            id="regularPrice"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            {...register("regularPrice", {
              required: "This field is required",
              min: { value: 100, message: "Cabin price must be at least 100" },
            })}
          />
        </FormRow>

        {/* Discount */}
        <FormRow label="Discount" error={errors?.discount?.message}>
          <input
            id="discount"
            type="number"
            value={getValues("discount") ?? 0} //
            defaultValue={0}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            {...register("discount", {
              required: "This field is required",
              validate: (value) =>
                value <= getValues().regularPrice ||
                "Discount must be less than Regular Price",
            })}
          />
        </FormRow>

        {/* Description */}
        <FormRow label="Description" error={errors?.description?.message}>
          <textarea
            id="description"
            className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            {...register("description", {
              required: "This field is required",
            })}
          />
        </FormRow>

        {/* Images */}
        <FormRow label="Image URL" error={errors?.images?.message}>
          <input
            id="images"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500"
            {...register("images", {
              required: isEditing ? false : "This field is required",
            })}
          />
        </FormRow>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-5">
          <button
            type="reset"
            disabled={isworking}
            className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isworking}
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {isEditing ? "Edit Cabin" : "Create new Cabin"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCabinForm;
