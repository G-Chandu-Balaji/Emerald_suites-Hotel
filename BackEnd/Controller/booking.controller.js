import { bookingModel } from "../Model/booking.model.js";
import { cabinModel } from "../Model/cabin.model.js";
import { guestModel } from "../Model/guest.model.js";

export const bookCabin = async (req, res) => {
  try {
    const cabin = await bookingModel.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        cabin,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const { field, value, sortBy } = req.query;

    let mogoFilter = {};

    //Filtering
    if (field && value) {
      mogoFilter[field] = value;
    }

    //Sortiing
    let mongoSort = {};
    if (sortBy) {
      const [sortFiled, sortOrder] = sortBy.split("-");
      mongoSort[sortFiled] = sortOrder === "desc" ? -1 : 1;
    }
    const bookings = await bookingModel
      .find(mogoFilter)
      .sort(mongoSort)
      .populate("cabinId", "cabinNumber")
      .populate("guestId", "fullName email");

    res.status(200).json({
      status: "success",
      result: bookings.length,
      data: {
        bookings,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};
// // In your bookings controller file
// import Booking from "../models/Booking.js"; // Assuming you have a Booking model

// export const getAllBookingsSorting = async (req, res) => {
//   try {
//     const { status, sortBy } = req.query;

//     // Build filter object
//     let filter = {};
//     if (status && status !== "all") {
//       filter.status = status; // Assuming 'status' is the field name in your model
//     }

//     // Build sort object
//     let sort = {};
//     if (sortBy) {
//       // Expected format: 'field-direction' e.g., 'startDate-asc' or 'createdAt-desc'
//       const [field, direction] = sortBy.split("-");

//       // Validate field name if necessary (security)
//       const allowedSortFields = [
//         "createdAt",
//         "startDate",
//         "totalPrice",
//         "status",
//       ]; // Add your booking fields
//       if (allowedSortFields.includes(field)) {
//         sort[field] = direction === "asc" ? 1 : -1;
//       }
//     } else {
//       // Default sort by creation date descending (newest first)
//       sort.createdAt = -1;
//     }

//     // Execute query
//     const bookings = await Booking.find(filter).sort(sort);

//     res.status(200).json({
//       data: {
//         bookings,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to fetch bookings",
//       error: error.message,
//     });
//   }
// };
