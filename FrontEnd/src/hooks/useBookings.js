import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBookingsApi } from "../services/apiBookings";
import { useSearchParams } from "react-router";

export function useBookings() {
  const [searchParams] = useSearchParams();

  //filtering
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //SortBy
  const sortBy = searchParams.get("sortBy") || "startDate-desc";

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookingsApi({ filter, sortBy }),
  });

  const bookings = data?.data?.bookings ?? [];

  return { bookings, isLoading, isFetching };
}
