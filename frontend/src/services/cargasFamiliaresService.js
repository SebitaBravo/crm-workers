import axios from 'axios';

export const getCargaFamiliar = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/carga-familiar');
        if (response.status !== 200) {
            throw new Error('Error al obtener las cargas familiares');
        }
        return response.data;
    } catch (error) {
        console.error('Error al obtener las cargas familiares:', error);
        throw error;
    }
};

export const postCargaFamiliarService = async (cargaFamiliar) => {
    try {
        const response = await axios.post('http://localhost:3001/api/carga-familiar', cargaFamiliar);
        if (response.status !== 201) {
            throw new Error('Error al agregar la carga familiar');
        }
        return response.data;
    } catch (error) {
        console.error('Error al agregar la carga familiar:', error);
        throw error;
    }
};

export const deleteCargaFamiliarService = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3001/api/carga-familiar/${id}`);
        if (response.status !== 200) {
            throw new Error('Error al eliminar la carga familiar');
        }
        return response.data;
    } catch (error) {
        console.error('Error al eliminar la carga familiar:', error);
        throw error;
    }
};

export const updateCargaFamiliarService = async (cargaFamiliar) => {
    try {
        const response = await axios.put(`http://localhost:3001/api/carga-familiar/${cargaFamiliar.id}`, cargaFamiliar);
        if (response.status !== 200) {
            throw new Error('Error al actualizar la carga familiar');
        }
        return response.data;
    } catch (error) {
        console.error('Error al actualizar la carga familiar:', error);
        throw error;
    }
};