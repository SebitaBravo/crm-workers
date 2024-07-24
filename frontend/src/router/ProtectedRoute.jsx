import * as React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { isActiveSession } from "../auth/utils/isTokenExpired";

const ProtectedRoute = ({ children }) => {
  const { token, tokenExpiration } = React.useContext(AuthContext);

  const isActive = isActiveSession(token, tokenExpiration);

  if (!isActive) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
