import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router";
import { PAGE_SIZE } from "../@utils/constant";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  if (pageCount <= 1) return null;
  return (
    <div className="flex items-center justify-between p-2 ">
      <p>
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-semibold"> {count}</span> results
      </p>

      <div className="flex items-center gap-4">
        <button
          className="flex items-center  disabled:opacity-50
         disabled:cursor-not-allowed
         disabled:bg-gray-200
         "
          onClick={prevPage}
          disabled={currentPage == 1}
        >
          <HiChevronLeft />
          <span>Previous</span>
        </button>
        <button
          className="flex items-center  disabled:opacity-50
         disabled:cursor-not-allowed
         disabled:bg-gray-200"
          onClick={nextPage}
          disabled={currentPage == pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
