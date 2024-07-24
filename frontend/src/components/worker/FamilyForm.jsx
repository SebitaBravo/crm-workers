import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "../Header";
import { postCargaFamiliarService } from "../../services/cargasFamiliaresService";

function FamilyForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    parentesco: "",
    sexo: "",
    fecha_nacimiento: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      await postCargaFamiliarService(formData);
      setMessage("Carga familiar agregada exitosamente");
      setFormData({
        nombre: "",
        apellido: "",
        parentesco: "",
        sexo: "",
        fecha_nacimiento: "",
      });
    } catch (error) {
      console.error("Error al agregar la carga familiar:", error);
      setError("Error al agregar la carga familiar");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Agregar Carga Familiar</h2>
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
                  name="nombre"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.nombre}
                  onChange={handleChange}
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
                  name="apellido"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-left font-bold mb-1"
                  htmlFor="parentesco"
                >
                  Parentesco
                </label>
                <input
                  type="text"
                  id="parentesco"
                  name="parentesco"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.parentesco}
                  onChange={handleChange}
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
                  name="sexo"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.sexo}
                  onChange={handleChange}
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
                  htmlFor="fecha_nacimiento"
                >
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  id="fecha_nacimiento"
                  name="fecha_nacimiento"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.fecha_nacimiento}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Agregar Carga Familiar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyForm;
