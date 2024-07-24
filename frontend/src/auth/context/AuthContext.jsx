import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [rol, setRol] = useState(localStorage.getItem("rol") || "");
  const [tokenExpiration, setTokenExpiration] = useState(
    localStorage.getItem("tokenExpiration") || ""
  );

  const login = (token, rol, tokenExpiration) => {
    setToken(token);

    localStorage.setItem("token", token);
    setRol(rol);
    localStorage.setItem("rol", rol);

    setTokenExpiration(tokenExpiration);
    localStorage.setItem("tokenExpiration", tokenExpiration);
  };

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    setRol("");
    localStorage.removeItem("rol");
    setTokenExpiration("");
    localStorage.removeItem("tokenExpiration");
  };

  return (
    <AuthContext.Provider
      value={{ token, rol, tokenExpiration, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
