import { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { FaEdit, FaTrash } from "react-icons/fa";
import "chart.js/auto";
import {
  getTrabajadoresService,
  deleteTrabajadorService,
  postTrabajadoresService,
} from "../../services/trabajadoresService";
import { getContactoEmergenciaService } from "../../services/contactoEmergenciaService";
import { getCargaFamiliar } from "../../services/cargasFamiliaresService";
import EditEmployeeForm from "./EditEmployeeForm";

function Dashboard() {
  const [empleados, setEmpleados] = useState([]);
  const [cargos, setCargos] = useState({});
  const [salarios, setSalarios] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [newTrabajador, setNewTrabajador] = useState({
    rut_trabajador: "",
    nombre: "",
    apellido: "",
    sexo: "",
    direccion: "",
    telefono: "",
    fecha_nacimiento: "",
    cargo: "",
    fecha_ingreso: "",
    departamento: "",
    salario: 0,
  });

  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        const [trabajadoresData, contactosData, cargasData] = await Promise.all(
          [
            getTrabajadoresService(),
            getContactoEmergenciaService(),
            getCargaFamiliar(),
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

        const cargosCount = trabajadoresData.reduce((acc, empleado) => {
          acc[empleado.cargo] = (acc[empleado.cargo] || 0) + 1;
          return acc;
        }, {});
        setCargos(cargosCount);

        const totalSalarios = trabajadoresData.reduce(
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

  const handleDelete = async (id) => {
    try {
      await deleteTrabajadorService(id);
      setEmpleados(empleados.filter((empleado) => empleado.id !== id));
    } catch (error) {
      console.error("Error al eliminar el empleado:", error);
    }
  };

  const handleEdit = (empleado) => {
    setSelectedEmployee(empleado);
  };

  const handleSave = (updatedEmployee) => {
    setEmpleados(
      empleados.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setSelectedEmployee(null);
  };

  const handleAddTrabajador = async () => {
    try {
      const addedTrabajador = await postTrabajadoresService(newTrabajador);
      setEmpleados([...empleados, addedTrabajador]);
    } catch (error) {
      console.error("Error al agregar el empleado:", error);
    }
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
      {selectedEmployee ? (
        <EditEmployeeForm empleado={selectedEmployee} onSave={handleSave} />
      ) : (
        <>
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
            </div>
            <div className="overflow-x-auto max-h-96 overflow-y-auto">
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
                        {empleado.contacto_emergencia}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {empleado.carga_familiar}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex space-x-2">
                        <button
                          className="text-blue-500"
                          onClick={() => handleEdit(empleado)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="text-red-500"
                          onClick={() => handleDelete(empleado.id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
