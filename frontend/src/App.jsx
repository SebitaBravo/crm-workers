import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import ChiefPage from "./pages/ChiefPage";
import WorkerPage from "./pages/WorkerPage.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rol from "./components/administrator/Rol";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/rol" element={<Rol />} />
        <Route path="/jefe" element={<ChiefPage />} />
        <Route path="/trabajador" element={<WorkerPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
