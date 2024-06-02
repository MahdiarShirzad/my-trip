import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";

export function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),
    onSuccess: (data) => {
      dispatch(setUser(data));
      navigate("/");
    },
  });

  return { login, isPending };
}
