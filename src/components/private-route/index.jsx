import { Navigate } from "react-router-dom";
import useAuthenticate from "@/hooks/useAuthenticate";

const PrivateRoute = ({ children, allowedRoles }) => {
  const { accessToken, userInfo } = useAuthenticate();

  if (!accessToken) {
    return <Navigate to="/" replace />;
  }

  if (accessToken && !allowedRoles.includes(userInfo?.role)) {
    return <Navigate to="/not-authorized" replace />;
  }

  return children;
};

export default PrivateRoute;
