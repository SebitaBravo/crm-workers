import axios from "axios";
import { API_BASE_URL } from '../utils/constants.js';

const API_URL = `${API_BASE_URL}/trabajadores`;

export const getTrabajadoresService = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los trabajadores:", error);
    throw error;
  }
};

export const postTrabajadoresService = async (trabajador) => {
  try {
    const response = await axios.post(`${API_URL}`, trabajador);
    return response.data;
  } catch (error) {
    console.error("Error al agregar el trabajador:", error);
    throw error;
  }
};

export const updateTrabajadorService = async (trabajador) => {
  try {
    const response = await axios.put(`${API_URL}/${trabajador.id}`, trabajador);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el trabajador:", error);
    throw error;
  }
};

export const deleteTrabajadorService = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el trabajador:", error);
    throw error;
  }
};