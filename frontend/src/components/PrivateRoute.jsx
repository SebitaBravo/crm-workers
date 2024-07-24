import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return user ? children : <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
