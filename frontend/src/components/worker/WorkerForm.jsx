import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "../Header";

function EmpleadoForm() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [sexo, setSexo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario, por ejemplo, hacer una petición POST a tu servidor
    console.log("Nuevo empleado:", {
      nombre,
      apellido,
      sexo,
      direccion,
      telefono,
      fechaNacimiento,
    });
    // Resetear el formulario
    setNombre("");
    setApellido("");
    setSexo("");
    setDireccion("");
    setTelefono("");
    setFechaNacimiento("");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              Ingresar Datos del Empleado
            </h2>
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
                  htmlFor="sexo"
                >
                  Sexo
                </label>
                <select
                  id="sexo"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Seleccione el sexo
                  </option>
                  <option value="f">Femenino</option>
                  <option value="m">Masculino</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-left font-bold mb-1"
                  htmlFor="direccion"
                >
                  Dirección
                </label>
                <input
                  type="text"
                  id="direccion"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  required
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
              <div>
                <label
                  className="block text-left font-bold mb-1"
                  htmlFor="fechaNacimiento"
                >
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  id="fechaNacimiento"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Enviar Datos
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpleadoForm;
