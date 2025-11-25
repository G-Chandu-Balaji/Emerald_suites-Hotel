import mongoose from "mongoose";

const settingSchema = new mongoose.Schema({
  minBookingLength: {
    type: Number,
  },
  maxBookingLength: {
    type: Number,
  },
  maxGuestsPerBooking: {
    type: Number,
  },
  breakfastPrice: {
    type: Number,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    select: false, //to permantly hide from output
  },
});

export const settingModel = mongoose.model("setting", settingSchema);
