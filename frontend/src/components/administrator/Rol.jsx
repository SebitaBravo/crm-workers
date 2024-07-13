import { useState } from "react";
import axios from "axios"; // Importa Axios
import Sidebar from "./Sidebar";
import Header from "../Header";

function Rol() {
  const [roleName, setRoleName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/roles", {
        nombre: roleName,
      });
      setMessage(response.data.message);
      setRoleName("");
    } catch (error) {
      setError("Error al agregar el rol");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Rol</h2>
            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-left font-bold mb-1"
                  htmlFor="roleName"
                >
                  Nombre del Rol
                </label>
                <input
                  type="text"
                  id="roleName"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Agregar Rol
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rol;
