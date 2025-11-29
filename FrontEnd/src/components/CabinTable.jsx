import React, { Fragment, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateCabin, deleteCabin, getCabins } from "../services/apiCabins";
import toast from "react-hot-toast";
import CreateCabinForm from "./CreateCabinForm";

export default function CabinTable() {
  const [showForm, setShowForm] = useState(false);
  const [editedCabin, setEditedCabin] = useState(null);
  const querClient = useQueryClient();

  //............fetch cabin...........................
  const { data, isLoading } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  const cabins = data?.data?.cabins ?? [];

  //.............delete cabins......................
  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success("cabin deleted successfully");
      querClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  if (isLoading) return <p>Loading cabins...</p>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full ">
      {/* HEADER TITLE */}
      <h2 className="text-2xl font-bold mb-6">All Cabins</h2>

      {/* HEADER ROW */}
      <div
        className="grid font-semibold bg-gray-100 p-3 rounded-lg"
        style={{
          gridTemplateColumns: "9.6rem 0.8fr 2fr 1fr 1fr 3.2rem",
        }}
      >
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </div>

      {/* BODY */}
      <div className="mt-3 space-y-2">
        {cabins.map((cabin) => (
          <Fragment key={cabin._id}>
            <div
              key={cabin._id}
              className="grid p-3 border rounded-lg hover:bg-gray-50 transition"
              style={{
                gridTemplateColumns: "9.6rem 0.8fr 2fr 1fr 1fr 3.2rem",
              }}
            >
              {/* IMAGE */}
              <div>
                <img
                  src={cabin.images[0]}
                  alt={cabin.cabinNumber}
                  className="w-24 h-16 rounded-lg object-cover"
                />
              </div>

              {/* TEXT FIELDS */}
              <div className="flex items-center">{cabin.cabinNumber}</div>
              <div className="flex items-center">
                fits upto {cabin.maxCapacity} guests
              </div>
              <div className="flex items-center">₹{cabin.regularPrice}</div>
              <div className="flex items-center  text-green-600">
                {cabin.discount > 0 ? (
                  `₹${cabin.discount}`
                ) : (
                  <span className="ml-4">&mdash;</span>
                )}
              </div>

              {/* EDIT BUTTON */}
              <div className="flex items-center justify-end gap-3">
                <button
                  className="bg-blue-500 text-amber-100 py-1 px-4 rounded-2xl cursor-pointer"
                  onClick={() => {
                    setEditedCabin(cabin);
                    setShowForm((prev) => !prev);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-blue-500 text-amber-100 py-1 px-4 rounded-xl cursor-pointer"
                  onClick={() => mutate(cabin._id)}
                  disabled={isDeleting}
                >
                  Delete
                </button>
              </div>
            </div>
            {/* Show form only under selected row */}
            {showForm && editedCabin?._id === cabin._id && (
              <CreateCabinForm
                editedCabin={editedCabin}
                onSuccess={() => setShowForm(false)}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
