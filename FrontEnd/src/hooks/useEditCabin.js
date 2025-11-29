import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditCabinApi } from "../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: EditingCabin, isPending: isUpdating } = useMutation({
    mutationFn: EditCabinApi,
    onSuccess: () => {
      toast.success("Cabin edited successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { EditingCabin, isUpdating };
}
