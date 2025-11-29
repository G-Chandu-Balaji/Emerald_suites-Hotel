import express from "express";
import {
  deleteCabin,
  getAllCabins,
  CreateNewCabin,
} from "../Controller/cabin.controller.js";

let router = express.Router();

router.get("/", getAllCabins);
router.post("/", CreateNewCabin);

router.delete("/:id", deleteCabin);

export default router;
