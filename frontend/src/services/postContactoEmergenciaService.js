import axios from "axios";

export const postContactoEmergencia = async () => {
    try {
        const response = await axios.post(
            "http://localhost:3001/api/contacto-emergencia",
            {
              nombre,
              apellido,
              relacion,
              telefono,
              trabajador_id
            }
          );
        if (response.status !== 200) {
            throw new Error("Error al obtener el contacto de emergencia");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener el contacto de emergencia:", error);
    }
};