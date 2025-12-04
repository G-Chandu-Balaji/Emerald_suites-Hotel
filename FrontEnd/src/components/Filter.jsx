import React from "react";
import { useSearchParams } from "react-router";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex gap-3 my-4">
      {options.map((option) => {
        const isActive = option.value === currentFilter;
        return (
          <button
            key={option.value}
            onClick={() => handleClick(option.value)}
            className={`px-4 py-2 rounded-lg border transition 
              ${
                isActive
                  ? "bg-blue-400 text-white border-blue-500"
                  : "border-gray-300 hover:bg-blue-100"
              }
            `}
            disabled={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
