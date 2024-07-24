import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage.jsx";
import ChiefPage from "./pages/ChiefPage.jsx";
import WorkerPage from "./pages/WorkerPage.jsx";
import FamilyForm from "./components/worker/FamilyForm.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Rol from "./components/administrator/Rol.jsx";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/rol" element={<Rol />} />
          <Route path="/chief" element={<ChiefPage />} />
          <Route path="/worker" element={<WorkerPage />} />
          <Route path="/worker/family-form" element={<FamilyForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
