import React from "react";
import { format, isToday } from "date-fns";
import { formatDistanceFromNow } from "../@utils/helper";
import StatusTag from "./StatusTag";

function BookingTableRow({
  booking: {
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guestId: { fullName: guestName, email },
    cabinId: { cabinNumber: cabinName },
  },
}) {
  return (
    <div
      className="grid items-center bg-white p-3 rounded-lg border hover:shadow-sm transition"
      style={{
        gridTemplateColumns: "9.6rem 2fr 2fr 1fr 1fr 3.2rem",
      }}
    >
      {/* Cabin Name */}
      <div className="font-medium text-gray-700">{cabinName}</div>

      {/* Guest Info */}
      <div className="flex flex-col gap-[0.2rem]">
        <span className="">{guestName}</span>
        <span className="text-gray-400 overflow-hidden">{email}</span>
      </div>

      {/* Dates */}
      <div className="flex flex-col text-gray-600">
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span className="text-gray-400 text-sm">
          {format(new Date(startDate), "MMM dd yyyy")} —{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>

      {/* Status */}
      <div>
        <StatusTag status={status} />
      </div>

      {/* Amount */}
      <div className="font-semibold text-gray-700">₹{totalPrice}</div>

      {/* Placeholder or action buttons */}
      <div></div>
    </div>
  );
}

export default BookingTableRow;
