import { settingModel } from "../Model/setting.model.js";

export const getSettings = async (req, res) => {
  try {
    const settings = await settingModel.find();

    res.status(200).json({
      status: "success",
      data: {
        settings,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message,
    });
  }
};

export const updateSettings = async (req, res) => {
  try {
    const id = "69255094f16052a64c489628";
    const updateData = req.body;
    const updatedSetting = await settingModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true, // other schema validations still work
      }
    );

    res.status(200).json({
      status: "success",
      message: "Settings updated successfully",
      data: updatedSetting,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
