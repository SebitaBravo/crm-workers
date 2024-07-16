import axios from "axios"

export const getTrabajadoresService = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/trabajadores');
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