import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getSettingsApi } from "../services/apiSettings";

export function useSettings() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettingsApi,
  });

  const setting = data?.data?.settings[0] ?? [];
  return { setting, isLoading, isFetching };
}
