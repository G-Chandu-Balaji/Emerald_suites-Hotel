import React from "react";
import FormRow from "./FormRow";
import { useSettings } from "../hooks/useSettings";
import { useEditSettings } from "../hooks/useEditSettings";

function SettingsForm() {
  const {
    isLoading,
    setting: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    },
  } = useSettings();
  const { EditSettings, isUpdating } = useEditSettings();
  console.log(minBookingLength, maxBookingLength, maxGuestsPerBooking);

  if (isLoading) return <p>Loading.......</p>;

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    EditSettings({ [field]: value });
  }
  return (
    <div className="mt-3">
      <form className="flex flex-col gap-4">
        <FormRow label="Minium nights/Booking">
          <input
            id="minBookingLength"
            type="number"
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, "minBookingLength")}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500  disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
            defaultValue={minBookingLength}
          />
        </FormRow>
        <FormRow label="Maximum nights/Booking">
          <input
            id="maxBookingLength"
            type="number"
            defaultValue={maxBookingLength}
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, "maxBookingLength")}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500  disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
          />
        </FormRow>
        <FormRow label="Maximum guest/booking">
          <input
            id="maxGuestsPerBooking"
            type="number"
            defaultValue={maxGuestsPerBooking}
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
          />
        </FormRow>
        <FormRow label="Breakfast Price">
          <input
            id="breakfastPrice"
            type="number"
            defaultValue={breakfastPrice}
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, "breakfastPrice")}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
          />
        </FormRow>
      </form>
    </div>
  );
}

export default SettingsForm;
