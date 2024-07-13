import { useState } from "react";
import axios from "axios";

function WorkerForm() {
  const [rut_trabajador, setRutTrabajador] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [sexo, setSexo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha_nacimiento, setFechaNacimiento] = useState("");
  const [cargo, setCargo] = useState("");
  const [fecha_ingreso, setFechaIngreso] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [salario, setSalario] = useState("");
  const [contactoNombre, setContactoNombre] = useState("");
  const [contactoApellido, setContactoApellido] = useState("");
  const [contactoRelacion, setContactoRelacion] = useState("");
  const [contactoTelefono, setContactoTelefono] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const responseTrabajador = await axios.post(
        "http://localhost:3001/api/trabajadores",
        {
          rut_trabajador,
          nombre,
          apellido,
          sexo,
          direccion,
          telefono,
          fecha_nacimiento,
          cargo,
          fecha_ingreso,
          departamento,
          salario,
        }
      );

      const trabajadorId = responseTrabajador.data.trabajadorId;

      await axios.post("http://localhost:3001/api/contacto-emergencia", {
        nombre: contactoNombre,
        apellido: contactoApellido,
        relacion: contactoRelacion,
        telefono: contactoTelefono,
        trabajador_id: trabajadorId,
      });

      setMessage("Empleado y contacto de emergencia agregados exitosamente");
      // Resetear el formulario
      setRutTrabajador("");
      setNombre("");
      setApellido("");
      setSexo("");
      setDireccion("");
      setTelefono("");
      setFechaNacimiento("");
      setCargo("");
      setFechaIngreso("");
      setDepartamento("");
      setSalario("");
      setContactoNombre("");
      setContactoApellido("");
      setContactoRelacion("");
      setContactoTelefono("");
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
                    id: "rut_trabajador",
                    value: rut_trabajador,
                    onChange: setRutTrabajador,
                  },
                  {
                    label: "Nombre",
                    type: "text",
                    id: "nombre",
                    value: nombre,
                    onChange: setNombre,
                  },
                  {
                    label: "Apellido",
                    type: "text",
                    id: "apellido",
                    value: apellido,
                    onChange: setApellido,
                  },
                  {
                    label: "Sexo",
                    type: "select",
                    id: "sexo",
                    value: sexo,
                    onChange: setSexo,
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
                    value: direccion,
                    onChange: setDireccion,
                  },
                  {
                    label: "Teléfono",
                    type: "text",
                    id: "telefono",
                    value: telefono,
                    onChange: setTelefono,
                  },
                  {
                    label: "Fecha de Nacimiento",
                    type: "date",
                    id: "fecha_nacimiento",
                    value: fecha_nacimiento,
                    onChange: setFechaNacimiento,
                  },
                  {
                    label: "Cargo",
                    type: "text",
                    id: "cargo",
                    value: cargo,
                    onChange: setCargo,
                  },
                  {
                    label: "Fecha de Ingreso",
                    type: "date",
                    id: "fecha_ingreso",
                    value: fecha_ingreso,
                    onChange: setFechaIngreso,
                  },
                  {
                    label: "Departamento",
                    type: "text",
                    id: "departamento",
                    value: departamento,
                    onChange: setDepartamento,
                  },
                  {
                    label: "Salario",
                    type: "number",
                    id: "salario",
                    value: salario,
                    onChange: setSalario,
                  },
                ].map(({ label, type, id, value, onChange, options }) => (
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
                        className="w-full p-2 border border-gray-300 rounded"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
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
                        className="w-full p-2 border border-gray-300 rounded"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
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
                      id: "contacto_nombre",
                      value: contactoNombre,
                      onChange: setContactoNombre,
                    },
                    {
                      label: "Apellido del Contacto",
                      type: "text",
                      id: "contacto_apellido",
                      value: contactoApellido,
                      onChange: setContactoApellido,
                    },
                    {
                      label: "Relación",
                      type: "text",
                      id: "contacto_relacion",
                      value: contactoRelacion,
                      onChange: setContactoRelacion,
                    },
                    {
                      label: "Teléfono del Contacto",
                      type: "text",
                      id: "contacto_telefono",
                      value: contactoTelefono,
                      onChange: setContactoTelefono,
                    },
                  ].map(({ label, type, id, value, onChange }) => (
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
                        className="w-full p-2 border border-gray-300 rounded"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
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
