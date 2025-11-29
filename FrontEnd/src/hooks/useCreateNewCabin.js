import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { CreateCabinApi } from "../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateNewCabin() {
  const queryClient = useQueryClient();

  const { mutate: creatingNewCabin, isPending: isCreating } = useMutation({
    mutationFn: CreateCabinApi,
    onSuccess: () => {
      toast.success("Cabin created successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { creatingNewCabin, isCreating };
}
