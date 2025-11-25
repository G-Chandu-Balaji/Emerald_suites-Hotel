import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { cabinModel } from "../Model/cabin.model.js";
import { guestModel } from "../Model/guest.model.js";
import { settingModel } from "../Model/setting.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });

//REVIEW - read json file
const settings = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data-setting.json"), "utf-8")
);

const importData = async () => {
  try {
    // await cabinModel.create(cabins);
    // await guestModel.create(guests);
    await settingModel.create(settings);

    console.log("Data Successfully Loaded");
    process.exit();
  } catch (err) {
    console.log(err.message);
  }
};

const deleteData = async () => {
  try {
    await cabinModel.deleteMany();
    console.log("Data Successfully Deleted");
    process.exit();
  } catch (err) {
    console.log(err.message);
  }
};

console.log(process.argv);

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
