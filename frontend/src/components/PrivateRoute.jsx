import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext.jsx";

function PrivateRoute(element) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return user ? element : <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
