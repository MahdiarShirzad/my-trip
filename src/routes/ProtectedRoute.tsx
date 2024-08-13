import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../features/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/*" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
