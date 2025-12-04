import React, { Fragment, useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useCabins } from "../hooks/useCabins";
import { useDeleteCabins } from "../hooks/useDeleteCabins";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateNewCabin } from "../hooks/useCreateNewCabin";
import Modal from "./Modal";
import DeleteConfirm from "./DeleteConfirm";
import ActionMenu from "./ActionMenu";
import CabinTableOperations from "./CabinTableOperations";
import { useSearchParams } from "react-router";

export default function CabinTable() {
  //............fetch cabin...........................
  const { cabins, isLoading, isFetching } = useCabins();

  //.............................................
  const [showForm, setShowForm] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);
  const [editedCabin, setEditedCabin] = useState(null);

  const [searchParams] = useSearchParams();

  //...filterimg
  const filtervalue = searchParams.get("discount") || "all";
  let filteredCabins;
  if (filtervalue == "all") filteredCabins = cabins;
  if (filtervalue == "no-discount")
    filteredCabins = cabins.filter((ele) => ele.discount == 0);
  if (filtervalue == "with-discount")
    filteredCabins = cabins.filter((ele) => ele.discount > 0);

  //...sortBy
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  //.............delete cabins......................
  const { isDeleting, mutate: DeleteCabin } = useDeleteCabins();

  const { creatingNewCabin, isCreating } = useCreateNewCabin();

  function copyCabin(cabin) {
    const newCabin = {
      cabinNumber: cabin.cabinNumber + 1000,
      name: `${cabin.name} (Copy)`,
      regularPrice: cabin.regularPrice,
      discount: cabin.discount,
      description: cabin.description,
      maxCapacity: cabin.maxCapacity,
      images: [...cabin.images],
    };

    creatingNewCabin(newCabin);
  }

  if (isLoading) return <p>Loading cabins...</p>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full ">
      {/* HEADER TITLE */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-6">All Cabins</h2>
        {/* <div className="text-md"> Sort/Filter</div> */}
        <CabinTableOperations />
      </div>

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
        {isFetching && <p>Refreshing data...</p>}
        {sortedCabins.map((cabin) => (
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
              {/* <div className="flex items-center justify-end gap-3">
                <button
                  disabled={isCreating}
                  className=" cursor-pointer"
                  onClick={() => copyCabin(cabin)}
                >
                  <HiSquare2Stack />
                </button>
                <button
                  className=" cursor-pointer"
                  onClick={() => {
                    setEditedCabin(cabin);
                    setShowForm(true);
                  }}
                >
                  <HiPencil />
                </button>
                <button
                  className=" cursor-pointer"
                  onClick={() => {
                    setDeleteTargetId(cabin._id);
                  }}
                  disabled={isDeleting}
                >
                  <HiTrash />
                </button>
              </div>
              
            </div> */}
              <div className="flex items-center justify-end gap-3">
                <ActionMenu
                  cabin={cabin}
                  copyCabin={copyCabin}
                  onEdit={(cabin) => {
                    setEditedCabin(cabin);
                    setShowForm(true);
                  }}
                  onDelete={(id) => setDeleteTargetId(id)}
                  isCreating={isCreating}
                  isDeleting={isDeleting}
                />
              </div>
            </div>

            {/* Show form only under selected row */}
            {showForm && editedCabin?._id === cabin._id && (
              <Modal onClose={() => setShowForm(false)}>
                <CreateCabinForm
                  editedCabin={editedCabin}
                  onSuccess={() => setShowForm(false)}
                  onCloseModal={() => setShowForm(false)}
                />
              </Modal>
            )}
            {deleteTargetId === cabin._id && (
              <Modal onClose={() => setDeleteTargetId(null)}>
                <DeleteConfirm
                  onCancel={() => setDeleteTargetId(null)}
                  onDelete={() => {
                    DeleteCabin(deleteTargetId, {
                      onSuccess: () => setDeleteTargetId(null),
                    });
                  }}
                />
              </Modal>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
