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

export const deleteCabin = async (req, res) => {
  try {
    const { id } = req.params;
    const cabins = await cabinModel.findByIdAndDelete(id);

    if (!cabins) {
      return res.status(404).json({
        status: "fail",
        message: "Cabin not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Cabin deleted successfully",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

export const CreateNewCabin = async (req, res) => {
  try {
    const {
      name,
      maxCapacity,
      regularPrice,
      discount,
      cabinNumber,
      description,
      images,
    } = req.body;
    const cabin = await cabinModel.create({
      name,
      maxCapacity,
      regularPrice,
      discount,
      cabinNumber,
      description,
      images,
    });

    res.status(200).json({
      status: "success",
      message: "Cabin created successfully",
      data: cabin,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};
