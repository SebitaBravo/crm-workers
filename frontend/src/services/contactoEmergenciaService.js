import axios from "axios";
import { API_BASE_URL } from '../utils/constants.js';

const API_URL = `${API_BASE_URL}/contacto-emergencia`;

export const getContactoEmergenciaService = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los contactos de emergencia:", error);
    throw error;
  }
};

export const postContactoEmergenciaService = async (contactoEmergencia) => {
  try {
    const response = await axios.post(`${API_URL}`, contactoEmergencia);
    return response.data;
  } catch (error) {
    console.error("Error al agregar el contacto de emergencia:", error);
    throw error;
  }
};

export const updateContactoEmergenciaService = async (contactoEmergencia) => {
  try {
    const response = await axios.put(`${API_URL}/${contactoEmergencia.id}`, contactoEmergencia);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el contacto de emergencia:", error);
    throw error;
  }
};