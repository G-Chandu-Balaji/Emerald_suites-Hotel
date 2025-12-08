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
    const { field, value, sortBy, page = 1, limit = 10 } = req.query;

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

    //Pagination
    const skip = (page - 1) * limit;

    const bookings = await bookingModel
      .find(mogoFilter)
      .sort(mongoSort)
      .skip(skip)
      .limit(Number(limit))
      .populate("cabinId", "cabinNumber")
      .populate("guestId", "fullName email");

    const count = await bookingModel.countDocuments(mogoFilter);
    res.status(200).json({
      status: "success",
      result: bookings.length,
      data: {
        bookings,
        count,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};
