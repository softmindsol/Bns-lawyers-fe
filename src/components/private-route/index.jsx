import { Navigate } from "react-router-dom";
import useAuthenticate from "../../hooks/useAuthenticate";

const PrivateRoute = ({ children }) => {
  const { access_token } = useAuthenticate();

  if (!access_token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
