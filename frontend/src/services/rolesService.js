import axios from 'axios';

export const getRolesService = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/roles');
        if (response.status !== 200) {
            throw new Error('Error al obtener los roles');
        }
        return response.data;
    } catch (error) {
        console.error('Error al obtener los roles:', error);
        throw error;
    }
};

export const postRolesService = async (nombre) => {
    try {
        const response = await axios.post('http://localhost:3001/api/roles', {
            nombre
        });
        if (response.status !== 201) {
            throw new Error('Error al agregar el rol');
        }
        return response.data;
    } catch (error) {
        console.error('Error al agregar el rol:', error);
        throw error;
    }
};

export const deleteRolesService = async (id) => {
    try {
        await axios.delete(`http://localhost:3001/api/roles/${id}`);
    } catch (error) {
        console.error('Error al eliminar el rol:', error);
        throw error;
    }
};