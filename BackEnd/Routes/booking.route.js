import express from "express";
import { bookCabin, gatAllBookings } from "../Controller/booking.controller.js";

let router = express.Router();

router.post("/", bookCabin);
router.get("/", gatAllBookings);

export default router;
