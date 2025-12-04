import React from "react";

function Select({ options, value, onchange, ...props }) {
  console.log(props);
  return (
    <select
      onChange={onchange}
      value={value}
      className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 
                 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                 hover:border-blue-300 transition"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
