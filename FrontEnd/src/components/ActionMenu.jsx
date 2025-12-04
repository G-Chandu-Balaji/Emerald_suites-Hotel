import { useState, Fragment } from "react";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

function ActionMenu({
  cabin,
  copyCabin,
  onEdit,
  onDelete,
  isCreating,
  isDeleting,
}) {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClick(() => setOpen(false), open);
  return (
    <div className="relative" ref={ref}>
      {/* Menu button (three dots) */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 rounded-full hover:bg-gray-200 transition"
      >
        ⋮
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <button
            onClick={() => {
              copyCabin(cabin);
              setOpen(false);
            }}
            disabled={isCreating}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
          >
            <HiSquare2Stack /> Copy
          </button>

          <button
            onClick={() => {
              onEdit(cabin);
              setOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
          >
            <HiPencil /> Edit
          </button>

          <button
            onClick={() => {
              onDelete(cabin._id);
              setOpen(false);
            }}
            disabled={isDeleting}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-600"
          >
            <HiTrash /> Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default ActionMenu;
