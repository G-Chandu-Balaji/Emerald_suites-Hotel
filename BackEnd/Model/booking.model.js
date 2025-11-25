import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  numNights: {
    type: Number,
  },
  numGuests: {
    type: Number,
  },
  cabinPrice: {
    type: Number,
  },
  extraPrice: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
  status: {
    type: String,
  },
  hasBreakfast: {
    type: Boolean,
  },
  isPaid: {
    type: Boolean,
  },
  observations: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    select: false, //to permantly hide from output
  },
  cabinId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cabin",
  },
  guestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "guest",
  },
});

export const bookingModel = mongoose.model("booking", bookingSchema);
