import express from "express";
import {
  deleteCabin,
  getAllCabins,
  CreateNewCabin,
  EditCabin,
} from "../Controller/cabin.controller.js";

let router = express.Router();

router.get("/", getAllCabins);
router.post("/", CreateNewCabin);
router.patch("/:id", EditCabin);

router.delete("/:id", deleteCabin);

export default router;
