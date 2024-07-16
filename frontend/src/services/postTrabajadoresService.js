import axios from "axios"

export const postTrabajadoresService = async () => {
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
        if (response.status !== 200) {
            throw new Error("Error al obtener los empleados");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error al obtener los empleados:", error);
    }
};