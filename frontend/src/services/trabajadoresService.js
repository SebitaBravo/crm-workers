import axios from 'axios';

const API_URL = 'http://localhost:3001/api/trabajadores';

export const getTrabajadoresService = async () => {
    try {
        const response = await axios.get(API_URL);
        if (response.status !== 200) {
            throw new Error("Error al obtener los empleados");
        }
        return response.data;
    } catch (error) {
        console.error("Error al obtener los empleados:", error);
        throw error;
    }
};

export const deleteTrabajadorService = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error al eliminar el empleado:", error);
        throw error;
    }
};

export const postTrabajadoresService = async (trabajador) => {
    try {
        const response = await axios.post(API_URL, trabajador);
        if (response.status !== 201) {
            throw new Error("Error al agregar el empleado");
        }
        return response.data;
    } catch (error) {
        console.error("Error al agregar el empleado:", error);
        throw error;
    }
};

export const updateTrabajadorService = async (trabajador) => {
    try {
        const response = await axios.patch(`${API_URL}/${trabajador.id}`, trabajador);
        if (response.status !== 200) {
            throw new Error("Error al actualizar el empleado");
        }
        return response.data;
    } catch (error) {
        console.error("Error al actualizar el empleado:", error);
        throw error;
    }
};