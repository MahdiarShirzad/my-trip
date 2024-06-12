import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      alert("User updated successfully");
    },
    onError: (error: any) => {
      console.error("Error updating user", error.message);
    },
  });
}
