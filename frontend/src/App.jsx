import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import Rol from "./components/administrator/Rol";
import ChiefPage from "./pages/ChiefPage";
import WorkerPage from "./pages/WorkerPage.jsx";
import WorkerForm from "./components/worker/WorkerForm";
import EmergencyForm from "./components/worker/EmergencyForm";
import FamilyForm from "./components/worker/FamilyForm";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/rol" element={<Rol />} />
        <Route path="/jefe" element={<ChiefPage />} />
        <Route path="/trabajador" element={<WorkerPage />} />
        <Route path="/trabajador/formulario" element={<WorkerForm />} />
        <Route path="/trabajador/contacto" element={<EmergencyForm />} />
        <Route path="/trabajador/familia" element={<FamilyForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
