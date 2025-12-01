import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import cabinRoutes from "./Routes/cabin.route.js";
import bookingRoutes from "./Routes/booking.route.js";
import settingsRoutes from "./Routes/settings.route.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });

app.use("/api/bookings", bookingRoutes);
app.use("/api/cabins", cabinRoutes);
app.use("/api/settings", settingsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
