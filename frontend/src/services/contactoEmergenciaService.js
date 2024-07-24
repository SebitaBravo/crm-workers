import axios from 'axios';

export const getContactoEmergenciaService = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/contacto-emergencia');
        if (response.status !== 200) {
            throw new Error('Error al obtener el contacto de emergencia');
        }
        return response.data;
    } catch (error) {
        console.error('Error al obtener el contacto de emergencia:', error);
        throw error;
    }
};

export const postContactoEmergenciaService = async (contacto) => {
    try {
        const response = await axios.post('http://localhost:3001/api/contacto-emergencia', contacto);
        if (response.status !== 201) {
            throw new Error('Error al agregar el contacto de emergencia');
        }
        return response.data;
    } catch (error) {
        console.error('Error al agregar el contacto de emergencia:', error);
        throw error;
    }
};

export const deleteContactoEmergenciaService = async (id) => {
    try {
        await axios.delete(`http://localhost:3001/api/contacto-emergencia/${id}`);
    } catch (error) {
        console.error('Error al eliminar el contacto de emergencia:', error);
        throw error;
    }
};

export const updateContactoEmergenciaService = async (contacto) => {
    try {
        const response = await axios.patch(`http://localhost:3001/api/contacto-emergencia/${contacto.id}`, contacto);
        if (response.status !== 200) {
            throw new Error('Error al actualizar el contacto de emergencia');
        }
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el contacto de emergencia:', error);
        throw error;
    }
};