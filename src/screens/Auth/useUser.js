import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/userSlice";
// import { RootState } from "../../features/store";

export function useUser() {
  const dispatch = useDispatch();
  const { isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    onSuccess: (data) => {
      dispatch(setUser(data));
    },
  });

  const userState = useSelector((state) => state.user);

  return {
    isLoading,
    user: userState.user,
    isAuthenticated: userState.isAuthenticated,
  };
}
