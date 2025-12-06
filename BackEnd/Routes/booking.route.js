import express from "express";
import { bookCabin, getAllBookings } from "../Controller/booking.controller.js";

let router = express.Router();

router.post("/", bookCabin);
router.get("/", getAllBookings);

export default router;
