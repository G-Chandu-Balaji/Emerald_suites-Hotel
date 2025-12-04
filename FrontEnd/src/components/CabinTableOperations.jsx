import React from "react";
import Filter from "./Filter";
import SortBy from "./SortBy";

function CabinTableOperations() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With Discount" },
          { value: "no-discount", label: "No Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name(A-z)" },
          { value: "name-desc", label: "Sort by name(Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price (low first)" },
          { value: "regularPrice-desc", label: "Sort by Price (high first)" },
          { value: "maxCapacity-asc", label: "Sort by Capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort by Capacity (high first)" },
        ]}
      />
    </div>
  );
}

export default CabinTableOperations;
