import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCabinsApi } from "../services/apiCabins";

export function useCabins() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabinsApi,
  });

  const cabins = data?.data?.cabins ?? [];

  return { cabins, isLoading, isFetching };
}
