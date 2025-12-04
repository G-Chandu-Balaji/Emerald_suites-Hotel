import React from "react";
import Select from "./Select";
import { useSearchParams } from "react-router";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <div className="my-3">
      <Select
        options={options}
        type="white"
        onchange={handleChange}
        value={sortBy}
      />
    </div>
  );
}

export default SortBy;
