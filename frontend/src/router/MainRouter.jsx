import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage.jsx";
import ChiefPage from "../pages/ChiefPage.jsx";
import WorkerPage from "../pages/WorkerPage.jsx";
import FamilyForm from "../components/worker/FamilyForm.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Rol from "../components/administrator/Rol.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { AuthContext } from "../auth/context/AuthContext";
import { isActiveSession } from "../auth/utils/isTokenExpired";

function App() {
  const { token, rol, expiration } = useContext(AuthContext);

  const isActive = isActiveSession(token, expiration);

  const hrNavbar = [
    {
      name: "Listar trabajadores",
      url: "/worker",
    },
    {
      name: "Registrar trabajador",
      url: "/worker/family-form",
    },
  ];

  return (
    <BrowserRouter>
      <Router>
        {isActive && <MyNavbar nav={hrNavbar} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/rol"
            element={
              <ProtectedRoute>
                <Rol />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chief"
            element={
              <ProtectedRoute>
                <ChiefPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/worker"
            element={
              <ProtectedRoute>
                <WorkerPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/worker/family-form"
            element={
              <ProtectedRoute>
                <FamilyForm />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}

export default App;
