import axios from "axios";

export const postCargaFamiliarService = async () => {
    try {
        const response = await axios.post(
            "http://localhost:3001/api/cargas-familiares",
            {
              nombre,
              apellido,
              parentesco,
              sexo,
              fecha_nacimiento
            }
          );
        if (response.status !== 200) {
            throw new Error("Error al obtener la carga familiar");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener la carga familiar:", error);
    }
};