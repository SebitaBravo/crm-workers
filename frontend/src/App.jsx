import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import ChiefPage from "./pages/ChiefPage";
import WorkerPage from "./pages/WorkerPage.jsx";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/jefe" element={<ChiefPage />} />
        <Route path="/trabajador" element={<WorkerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
