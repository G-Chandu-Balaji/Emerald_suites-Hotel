import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { getBookingsApi } from "../services/apiBookings";
import { useSearchParams } from "react-router";
import { PAGE_SIZE } from "../@utils/constant";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  //filtering
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //SortBy
  const sortBy = searchParams.get("sortBy") || "startDate-desc";

  // ✅ Pagination
  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["bookings", filterValue, sortBy, page],
    queryFn: () =>
      getBookingsApi({ filter, sortBy, page, pageSize: PAGE_SIZE }),
    keepPreviousData: true,
  });

  const bookings = data?.data?.bookings ?? [];
  const count = data?.data?.count ?? 0;
  const pageCount = Math.ceil(count / PAGE_SIZE);

  useEffect(() => {
    if (page > pageCount && pageCount > 0) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  }, [page, pageCount, searchParams, setSearchParams]);

  //PreFetching
  useEffect(() => {
    if (page < pageCount)
      queryClient.prefetchQuery({
        queryKey: ["bookings", filterValue, sortBy, page + 1],
        queryFn: () =>
          getBookingsApi({
            filter,
            sortBy,
            page: page + 1,
            pageSize: PAGE_SIZE,
          }),
      });

    if (page > 1)
      queryClient.prefetchQuery({
        queryKey: ["bookings", filterValue, sortBy, page - 1],
        queryFn: () =>
          getBookingsApi({
            filter,
            sortBy,
            page: page - 1,
            pageSize: PAGE_SIZE,
          }),
      });
  }, [page, pageCount, filterValue, sortBy, queryClient]);

  return { bookings, count, isLoading, isFetching };
}
