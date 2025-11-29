import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabinApi } from "../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabins() {
  const querClient = useQueryClient();

  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("cabin deleted successfully");
      querClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, mutate };
}
