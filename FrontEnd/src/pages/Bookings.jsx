import React from "react";
import { useBookings } from "../hooks/useBookings";
import BookingTableRow from "../components/BookingTableRow";
import BookingTableOperations from "../components/BookingTableOperations";
import Pagination from "../components/Pagination";

function Bookings() {
  const { bookings, isLoading, count } = useBookings();
  if (isLoading) return <p className="p-4 text-gray-600">Loading...</p>;

  return (
    <div className="p-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold ">All Bookings</h2>
        <BookingTableOperations />
      </div>
      {/* Header Row */}
      <div
        className="grid items-center  font-semibold bg-gray-100 p-3 rounded-lg text-gray-700 w-full"
        style={{
          gridTemplateColumns: "9.6rem 2fr 2fr 1fr 1fr 3.2rem",
        }}
      >
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </div>

      {/* Table Body */}
      <div className="space-y-2 w-full">
        {bookings.map((booking) => (
          <BookingTableRow key={booking._id} booking={booking} />
        ))}
      </div>
      <div>
        <Pagination count={count} />
      </div>
    </div>
  );
}

export default Bookings;
