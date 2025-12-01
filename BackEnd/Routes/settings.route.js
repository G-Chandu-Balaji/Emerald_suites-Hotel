import express from "express";
import {
  getSettings,
  updateSettings,
} from "../Controller/setting.controller.js";

let router = express.Router();

router.get("/", getSettings);
router.patch("/", updateSettings);

export default router;
