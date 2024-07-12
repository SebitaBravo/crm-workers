import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";

function DashboardContent() {
  const [empleados, setEmpleados] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/trabajadores"
        );
        const empleadosData = response.data;
        setEmpleados(empleadosData);
      } catch (error) {
        console.error("Error al obtener los empleados:", error);
      }
    };

    fetchEmpleados();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmpleados = empleados.filter((empleado) =>
    empleado.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Empleados</h2>
          <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-500">
            Agregar empleados
          </button>
        </div>
        <div>
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-md"
            placeholder="Buscar empleados"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <br />
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Cargo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Fecha ingreso
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Contacto de emergencia
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Carga familiar
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEmpleados.map((empleado) => (
                <tr key={empleado.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {empleado.nombre} {empleado.apellido}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {empleado.cargo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(empleado.fecha_ingreso).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-500 hover:bg-blue-400">
                      <MdOutlineSettingsPhone />
                    </button>
                    {"  "}
                    {empleado.contacto_emergencia}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-500 hover:bg-blue-400">
                      <IoDocumentTextSharp />
                    </button>
                    {"  "}
                    {empleado.carga_familiar}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
