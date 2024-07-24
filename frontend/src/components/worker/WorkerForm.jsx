import { useState } from "react";
import { postTrabajadoresService } from "../../services/trabajadoresService";
import { postContactoEmergenciaService } from "../../services/contactoEmergenciaService";

function WorkerForm() {
  const [formData, setFormData] = useState({
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
    salario: "",
    contactoNombre: "",
    contactoApellido: "",
    contactoRelacion: "",
    contactoTelefono: "",
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
      const responseTrabajador = await postTrabajadoresService({
        rut_trabajador: formData.rut_trabajador,
        nombre: formData.nombre,
        apellido: formData.apellido,
        sexo: formData.sexo,
        direccion: formData.direccion,
        telefono: formData.telefono,
        fecha_nacimiento: formData.fecha_nacimiento,
        cargo: formData.cargo,
        fecha_ingreso: formData.fecha_ingreso,
        departamento: formData.departamento,
        salario: formData.salario,
      });
      const trabajadorId = responseTrabajador.id;

      await postContactoEmergenciaService({
        nombre: formData.contactoNombre,
        apellido: formData.contactoApellido,
        relacion: formData.contactoRelacion,
        telefono: formData.contactoTelefono,
        trabajador_id: trabajadorId,
      });

      setMessage("Empleado y contacto de emergencia agregados exitosamente");
      setFormData({
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
        salario: "",
        contactoNombre: "",
        contactoApellido: "",
        contactoRelacion: "",
        contactoTelefono: "",
      });
    } catch (error) {
      console.error(
        "Error al agregar el empleado o contacto de emergencia:",
        error
      );
      setError("Error al agregar el empleado o contacto de emergencia");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
            <h2 className="text-2xl font-bold mb-4">
              Ingresar Datos del Empleado
            </h2>
            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    label: "RUT",
                    type: "text",
                    name: "rut_trabajador",
                    value: formData.rut_trabajador,
                  },
                  {
                    label: "Nombre",
                    type: "text",
                    name: "nombre",
                    value: formData.nombre,
                  },
                  {
                    label: "Apellido",
                    type: "text",
                    name: "apellido",
                    value: formData.apellido,
                  },
                  {
                    label: "Sexo",
                    type: "select",
                    name: "sexo",
                    value: formData.sexo,
                    options: [
                      { value: "", text: "Seleccione el sexo" },
                      { value: "f", text: "Femenino" },
                      { value: "m", text: "Masculino" },
                    ],
                  },
                  {
                    label: "Dirección",
                    type: "text",
                    name: "direccion",
                    value: formData.direccion,
                  },
                  {
                    label: "Teléfono",
                    type: "text",
                    name: "telefono",
                    value: formData.telefono,
                  },
                  {
                    label: "Fecha de Nacimiento",
                    type: "date",
                    name: "fecha_nacimiento",
                    value: formData.fecha_nacimiento,
                  },
                  {
                    label: "Cargo",
                    type: "text",
                    name: "cargo",
                    value: formData.cargo,
                  },
                  {
                    label: "Fecha de Ingreso",
                    type: "date",
                    name: "fecha_ingreso",
                    value: formData.fecha_ingreso,
                  },
                  {
                    label: "Departamento",
                    type: "text",
                    name: "departamento",
                    value: formData.departamento,
                  },
                  {
                    label: "Salario",
                    type: "number",
                    name: "salario",
                    value: formData.salario,
                  },
                ].map(({ label, type, name, value, options }) => (
                  <div key={name}>
                    <label
                      className="block text-left font-bold mb-1"
                      htmlFor={name}
                    >
                      {label}
                    </label>
                    {type === "select" ? (
                      <select
                        id={name}
                        name={name}
                        className="w-full p-2 border border-gray-300 rounded"
                        value={value}
                        onChange={handleChange}
                        required
                      >
                        {options.map(({ value, text }) => (
                          <option
                            key={value}
                            value={value}
                            disabled={value === ""}
                          >
                            {text}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={type}
                        id={name}
                        name={name}
                        className="w-full p-2 border border-gray-300 rounded"
                        value={value}
                        onChange={handleChange}
                        required
                      />
                    )}
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Ingresar Datos del Contacto de Emergencia
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      label: "Nombre del Contacto",
                      type: "text",
                      name: "contactoNombre",
                      value: formData.contactoNombre,
                    },
                    {
                      label: "Apellido del Contacto",
                      type: "text",
                      name: "contactoApellido",
                      value: formData.contactoApellido,
                    },
                    {
                      label: "Relación",
                      type: "text",
                      name: "contactoRelacion",
                      value: formData.contactoRelacion,
                    },
                    {
                      label: "Teléfono del Contacto",
                      type: "text",
                      name: "contactoTelefono",
                      value: formData.contactoTelefono,
                    },
                  ].map(({ label, type, name, value }) => (
                    <div key={name}>
                      <label
                        className="block text-left font-bold mb-1"
                        htmlFor={name}
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        id={name}
                        name={name}
                        className="w-full p-2 border border-gray-300 rounded"
                        value={value}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  ))}
                </div>
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

export default WorkerForm;
