import axios from "axios";

export const getRolesService = async () => {
    try {
        const response = await axios.get("http://localhost:3001/api/roles");
        if (response.status !== 200) {
            throw new Error("Error al obtener los roles");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error al obtener los roles:", error);
    }
}