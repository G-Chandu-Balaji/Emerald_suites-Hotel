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
    console.log(req.body);
    const {
      name,
      maxCapacity,
      regularPrice,
      discount,
      cabinNumber,
      description,
      images,
    } = req.body;
    if (Number(discount) >= Number(regularPrice)) {
      return res.status(400).json({
        status: "fail",
        message: "Discount must be less than Regular Price",
      });
    }
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

export const EditCabin = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // 1) Find existing cabin
    const cabin = await cabinModel.findById(id);
    if (!cabin) {
      return res
        .status(404)
        .json({ status: "fail", message: "Cabin not found" });
    }

    // 2) Determine values for discount validation
    // If frontend sends regularPrice or discount, use them; otherwise fallback to existing
    const regularPrice = updateData.regularPrice ?? cabin.regularPrice;
    const discount = updateData.discount ?? cabin.discount;

    // 3) Manual discount validation
    if (discount >= regularPrice) {
      return res.status(400).json({
        status: "fail",
        message: "Discount must be less than Regular Price",
      });
    }

    // 4) Update all fields (since RHF sends all fields)
    const updatedCabin = await cabinModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true, // other schema validations still work
    });

    res.status(200).json({
      status: "success",
      message: "Cabin updated successfully",
      data: updatedCabin,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
