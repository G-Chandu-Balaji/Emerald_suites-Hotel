import express from "express";
import { getAllCabins } from "../Controller/cabin.controller.js";

let router = express.Router();

router.get("/", getAllCabins);

export default router;
