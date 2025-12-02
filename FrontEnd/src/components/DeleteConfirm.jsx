import React from "react";

export default function DeleteConfirm({ onCancel, onDelete }) {
  return (
    <div className="p-6 w-[320px]">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Are you sure?
      </h2>

      {/* Message */}
      <p className="text-gray-600 mb-6">
        Do you really want to delete this cabin? This action cannot be undone.
      </p>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
