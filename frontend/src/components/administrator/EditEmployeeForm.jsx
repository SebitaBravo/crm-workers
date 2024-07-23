import { useState } from "react";
import { updateTrabajadorService } from "../../services/trabajadoresService";
import { updateContactoEmergenciaService } from "../../services/contactoEmergenciaService";
import { updateCargaFamiliarService } from "../../services/cargasFamiliaresService";

function EditEmployeeForm({ empleado, onSave }) {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    rut_trabajador: empleado.rut_trabajador,
    nombre: empleado.nombre,
    apellido: empleado.apellido,
    sexo: empleado.sexo,
    direccion: empleado.direccion,
    telefono: empleado.telefono,
    fecha_nacimiento: formatDate(empleado.fecha_nacimiento),
    cargo: empleado.cargo,
    fecha_ingreso: formatDate(empleado.fecha_ingreso),
    departamento: empleado.departamento,
    salario: empleado.salario,
    contactoNombre: empleado.contacto_emergencia?.nombre || "",
    contactoApellido: empleado.contacto_emergencia?.apellido || "",
    contactoRelacion: empleado.contacto_emergencia?.relacion || "",
    contactoTelefono: empleado.contacto_emergencia?.telefono || "",
    cargaNombre: empleado.carga_familiar?.nombre || "",
    cargaApellido: empleado.carga_familiar?.apellido || "",
    cargaParentesco: empleado.carga_familiar?.parentesco || "",
    cargaSexo: empleado.carga_familiar?.sexo || "",
    cargaFechaNacimiento: formatDate(empleado.carga_familiar?.fecha_nacimiento),
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
      await updateTrabajadorService(formData);
      await updateContactoEmergenciaService({
        id: empleado.contacto_emergencia?.id, // Asegúrate de que el id del contacto de emergencia esté presente
        nombre: formData.contactoNombre,
        apellido: formData.contactoApellido,
        relacion: formData.contactoRelacion,
        telefono: formData.contactoTelefono,
        trabajador_id: empleado.id,
      });
      await updateCargaFamiliarService({
        id: empleado.carga_familiar?.id, // Asegúrate de que el id de la carga familiar esté presente
        nombre: formData.cargaNombre,
        apellido: formData.cargaApellido,
        parentesco: formData.cargaParentesco,
        sexo: formData.cargaSexo,
        fecha_nacimiento: formData.cargaFechaNacimiento,
        trabajador_id: empleado.id,
      });

      setMessage("Empleado actualizado exitosamente");
      onSave(formData);
    } catch (error) {
      console.error("Error al actualizar el empleado:", error);
      setError("Error al actualizar el empleado");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
            <h2 className="text-2xl font-bold mb-4">
              Editar Datos del Empleado
            </h2>
            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    label: "RUT",
                    type: "text",
                    id: "rut_trabajador",
                    value: formData.rut_trabajador,
                    name: "rut_trabajador",
                  },
                  {
                    label: "Nombre",
                    type: "text",
                    id: "nombre",
                    value: formData.nombre,
                    name: "nombre",
                  },
                  {
                    label: "Apellido",
                    type: "text",
                    id: "apellido",
                    value: formData.apellido,
                    name: "apellido",
                  },
                  {
                    label: "Sexo",
                    type: "select",
                    id: "sexo",
                    value: formData.sexo,
                    name: "sexo",
                    options: [
                      { value: "", text: "Seleccione el sexo" },
                      { value: "f", text: "Femenino" },
                      { value: "m", text: "Masculino" },
                    ],
                  },
                  {
                    label: "Dirección",
                    type: "text",
                    id: "direccion",
                    value: formData.direccion,
                    name: "direccion",
                  },
                  {
                    label: "Teléfono",
                    type: "text",
                    id: "telefono",
                    value: formData.telefono,
                    name: "telefono",
                  },
                  {
                    label: "Fecha de Nacimiento",
                    type: "date",
                    id: "fecha_nacimiento",
                    value: formData.fecha_nacimiento,
                    name: "fecha_nacimiento",
                  },
                  {
                    label: "Cargo",
                    type: "text",
                    id: "cargo",
                    value: formData.cargo,
                    name: "cargo",
                  },
                  {
                    label: "Fecha de Ingreso",
                    type: "date",
                    id: "fecha_ingreso",
                    value: formData.fecha_ingreso,
                    name: "fecha_ingreso",
                  },
                  {
                    label: "Departamento",
                    type: "text",
                    id: "departamento",
                    value: formData.departamento,
                    name: "departamento",
                  },
                  {
                    label: "Salario",
                    type: "number",
                    id: "salario",
                    value: formData.salario,
                    name: "salario",
                  },
                ].map(({ label, type, id, value, name, options }) => (
                  <div key={id}>
                    <label
                      className="block text-left font-bold mb-1"
                      htmlFor={id}
                    >
                      {label}
                    </label>
                    {type === "select" ? (
                      <select
                        id={id}
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
                        id={id}
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
                  Editar Datos del Contacto de Emergencia
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      label: "Nombre del Contacto",
                      type: "text",
                      id: "contactoNombre",
                      value: formData.contactoNombre,
                      name: "contactoNombre",
                    },
                    {
                      label: "Apellido del Contacto",
                      type: "text",
                      id: "contactoApellido",
                      value: formData.contactoApellido,
                      name: "contactoApellido",
                    },
                    {
                      label: "Relación",
                      type: "text",
                      id: "contactoRelacion",
                      value: formData.contactoRelacion,
                      name: "contactoRelacion",
                    },
                    {
                      label: "Teléfono del Contacto",
                      type: "text",
                      id: "contactoTelefono",
                      value: formData.contactoTelefono,
                      name: "contactoTelefono",
                    },
                  ].map(({ label, type, id, value, name }) => (
                    <div key={id}>
                      <label
                        className="block text-left font-bold mb-1"
                        htmlFor={id}
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        id={id}
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
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Editar Datos de la Carga Familiar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label
                      className="block text-left font-bold mb-1"
                      htmlFor="cargaNombre"
                    >
                      Nombre de la Carga
                    </label>
                    <input
                      type="text"
                      id="cargaNombre"
                      name="cargaNombre"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={formData.cargaNombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-left font-bold mb-1"
                      htmlFor="cargaApellido"
                    >
                      Apellido de la Carga
                    </label>
                    <input
                      type="text"
                      id="cargaApellido"
                      name="cargaApellido"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={formData.cargaApellido}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-left font-bold mb-1"
                      htmlFor="cargaParentesco"
                    >
                      Parentesco
                    </label>
                    <input
                      type="text"
                      id="cargaParentesco"
                      name="cargaParentesco"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={formData.cargaParentesco}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-left font-bold mb-1"
                      htmlFor="cargaSexo"
                    >
                      Sexo
                    </label>
                    <select
                      id="cargaSexo"
                      name="cargaSexo"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={formData.cargaSexo}
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
                      htmlFor="cargaFechaNacimiento"
                    >
                      Fecha de Nacimiento
                    </label>
                    <input
                      type="date"
                      id="cargaFechaNacimiento"
                      name="cargaFechaNacimiento"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={formData.cargaFechaNacimiento}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditEmployeeForm;
