import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

export function useUser() {
  const { isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const userState = useSelector((state: RootState) => state.user);

  return {
    isLoading,
    user: userState.user,
    isAuthenticated: userState.isAuthenticated,
  };
}
