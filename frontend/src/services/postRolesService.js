import axios from "axios"

export const postRolesService = async () => {
    try {
        const response = await axios.post("http://localhost:3001/api/roles", {
            nombre
          });
        if (response.status !== 200) {
            throw new Error("Error al obtener los roles");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los roles:", error);
    }
};