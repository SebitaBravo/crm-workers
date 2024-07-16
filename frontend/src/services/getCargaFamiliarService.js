import axios from "axios";

export const getCargaFamiliar = async () => {
    try {
        const response = await axios.get("http://localhost:3001/api/carga-familiar");
        if (response.status !== 200) {
            throw new Error("Error al obtener las cargas");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error al obtener las cargas familiares:", error);
    }
}