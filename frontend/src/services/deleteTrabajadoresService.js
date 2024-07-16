import axios from "axios";

export const deleteTrabajadoresService = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3001/api/trabajadores/${id}`);
        if (response.status !== 200) {
            throw new Error("Error al eliminar el trabajador");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error al eliminar el trabajador:", error);
    }
}