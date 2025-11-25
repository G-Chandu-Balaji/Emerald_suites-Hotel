import { bookingModel } from "../Model/booking.model.js";

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

export const gatAllBookings = async (req, res) => {
  try {
    const bookings = await bookingModel.find();

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
