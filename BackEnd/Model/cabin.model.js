import mongoose from "mongoose";

const cabinSchema = new mongoose.Schema({
  cabinNumber: {
    type: Number,
    required: [true, "please Enter Cabin Number"],
  },
  name: {
    type: String,
    trim: true,
    required: [true, "cabin must have a name"],
  },
  regularPrice: {
    type: Number,
    required: [true, "Tour must have a price"],
  },
  discount: {
    type: Number,
    validate: {
      validator: function (val) {
        return val < this.regularPrice;
      },
      message: "DIscount price {{VALUE}} should be below regular price",
    },
  },
  description: {
    type: String,
    trim: true,
  },
  maxCapacity: {
    type: Number,
    required: [true, "A cabin must have a max-capacity"],
  },

  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false, //to permantly hide from output
  },
});

export const cabinModel = mongoose.model("cabin", cabinSchema);
