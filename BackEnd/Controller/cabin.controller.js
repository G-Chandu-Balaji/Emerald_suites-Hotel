import { cabinModel } from "../Model/cabin.model.js";

export const getAllCabins = async (req, res) => {
  try {
    const cabins = await cabinModel.find();

    res.status(200).json({
      status: "success",
      result: cabins.length,
      data: {
        cabins,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};
