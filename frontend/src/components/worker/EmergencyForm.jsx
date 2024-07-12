import { useState, useContext } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "../Header";

function ContactoEmergenciaForm() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [relacion, setRelacion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:3001/api/contactos-emergencia",
        {
          nombre,
          apellido,
          relacion,
          telefono,
        }
      );

      setMessage("Contacto de emergencia agregado exitosamente");
      // Resetear el formulario
      setNombre("");
      setApellido("");
      setRelacion("");
      setTelefono("");
    } catch (error) {
      setError("Error al agregar el contacto de emergencia");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              Agregar Contacto de Emergencia
            </h2>
            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-left font-bold mb-1"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-left font-bold mb-1"
                  htmlFor="apellido"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="apellido"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-left font-bold mb-1"
                  htmlFor="relacion"
                >
                  Relación
                </label>
                <input
                  type="text"
                  id="relacion"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={relacion}
                  onChange={(e) => setRelacion(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="block text-left font-bold mb-1"
                  htmlFor="telefono"
                >
                  Teléfono
                </label>
                <input
                  type="text"
                  id="telefono"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Agregar Contacto
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactoEmergenciaForm;
