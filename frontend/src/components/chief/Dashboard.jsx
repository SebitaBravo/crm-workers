import React, { useEffect, useState } from "react";
import { getTrabajadoresService } from "../../services/trabajadoresService";
import { getContactoEmergenciaService } from "../../services/contactoEmergenciaService";
import { getCargaFamiliarService } from "../../services/cargasFamiliaresService";

function DashboardContent() {
  const [empleados, setEmpleados] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trabajadoresData, contactosData, cargasData] = await Promise.all(
          [
            getTrabajadoresService(),
            getContactoEmergenciaService(),
            getCargaFamiliarService(),
          ]
        );

        const empleadosConDatos = trabajadoresData.map((trabajador) => {
          const contacto = contactosData.find(
            (contacto) => contacto.trabajador_id === trabajador.id
          );
          const carga = cargasData.find(
            (carga) => carga.trabajador_id === trabajador.id
          );
          return {
            ...trabajador,
            contacto_emergencia: contacto
              ? `${contacto.nombre} ${contacto.apellido} (${contacto.telefono})`
              : "No disponible",
            carga_familiar: carga
              ? `${carga.nombre} ${carga.apellido} (${carga.parentesco})`
              : "No disponible",
          };
        });

        setEmpleados(empleadosConDatos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setError("Error al obtener los datos");
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmpleados = empleados.filter((empleado) =>
    empleado.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full p-6 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Empleados</h2>
        </div>
        <div className="relative">
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-md"
            placeholder="Buscar empleados"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.415l4.243 4.243a1 1 0 01-1.414 1.415l-4.243-4.243zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
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
                    {empleado.contacto_emergencia}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
