import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../services/apiAuth";

export function useUpdateUser() {
  return useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      alert("User updated successfully");
    },
    onError: (error: any) => {
      console.error("Error updating user", error.message);
    },
  });
}
