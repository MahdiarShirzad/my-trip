import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";
import { toast } from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),
    onSuccess: (data) => {
      dispatch(setUser(data));
      localStorage.setItem("session", JSON.stringify(data.session));
      toast.success("You logged in successfully!");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    },
    onError: (error) => {
      toast.error("Login failed. Please try again.");
      console.error(error);
    },
  });

  return { login, isPending };
}
