import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: [true, "please provide full name"],
  },
  email: {
    type: String,
    required: [true, "please enter your email address"],
    trim: true,
  },
  nationalID: {
    type: String,
    trim: true,
  },
  nationality: {
    type: String,
    trim: true,
  },
  countryFlag: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false, //to permantly hide from output
  },
});

export const guestModel = mongoose.model("guest", guestSchema);
