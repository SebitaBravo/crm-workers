import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "../Header";

function Rol() {
  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario, por ejemplo, hacer una petición POST a tu servidor
    console.log("Nuevo rol:", { roleName, description });
    // Resetear el formulario
    setRoleName("");
    setDescription("");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Rol</h2>
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
              <div>
                <label
                  className="block text-left font-bold mb-1"
                  htmlFor="description"
                >
                  Descripción
                </label>
                <textarea
                  id="description"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
