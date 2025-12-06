import React from "react";

const statusStyles = {
  unconfirmed: "text-blue-700 bg-blue-100",
  "checked-in": "text-green-700 bg-green-100",
  "checked-out": "text-gray-700 bg-gray-200",
  cancelled: "text-red-700 bg-red-100",
};

export default function StatusTag({ status }) {
  return (
    <span
      className={`w-fit uppercase text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
