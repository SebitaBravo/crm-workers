import axios from 'axios';

export const getContactoEmergenciaService = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/contactos-emergencia');
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
        const response = await axios.post('http://localhost:3001/api/contactos-emergencia', contacto);
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
        await axios.delete(`http://localhost:3001/api/contactos-emergencia/${id}`);
    } catch (error) {
        console.error('Error al eliminar el contacto de emergencia:', error);
        throw error;
    }
};