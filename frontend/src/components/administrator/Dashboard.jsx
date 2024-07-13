import { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import "chart.js/auto";

function DashboardContent() {
  const [empleados, setEmpleados] = useState([]);
  const [cargos, setCargos] = useState({});
  const [salarios, setSalarios] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/trabajadores"
        );
        console.log("Datos obtenidos:", response.data); // Verificar datos obtenidos
        setEmpleados(response.data);

        // Calcular la cantidad de cada cargo
        const cargosCount = response.data.reduce((acc, empleado) => {
          acc[empleado.cargo] = (acc[empleado.cargo] || 0) + 1;
          return acc;
        }, {});
        setCargos(cargosCount);

        const totalSalarios = response.data.reduce(
          (acc, empleado) => acc + empleado.salario,
          0
        );
        setSalarios(totalSalarios);
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

  const pieData = {
    labels: Object.keys(cargos),
    datasets: [
      {
        data: Object.values(cargos),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#8E44AD",
          "#2ECC71",
        ],
      },
    ],
  };

  const barData = {
    labels: ["Salarios"],
    datasets: [
      {
        label: "Gastos en Salarios",
        data: [salarios],
        backgroundColor: ["#FF6384"],
      },
    ],
  };

  return (
    <div className="flex flex-col w-full p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-700">Cargos</h2>
          </div>
          <div className="mt-4">
            <Pie data={pieData} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Gastos en Salarios
            </h2>
          </div>
          <div className="mt-4">
            <Bar data={barData} />
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Empleados</h2>
          <button className="bg-purple-600 text-white py-2 px-4 rounded">
            Agregar empleados
          </button>
        </div>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Editar
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
                    <button className="text-blue-500">
                      <MdOutlineSettingsPhone />
                    </button>
                    {"  "}
                    {empleado.telefono_emergencia}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-500">
                      <IoDocumentTextSharp />
                    </button>
                    {"  "}
                    {empleado.carga_familiar}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex space-x-2">
                    <button className="text-blue-500">
                      <FaEdit />
                    </button>
                    <button className="text-red-500">
                      <FaTrash />
                    </button>
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
