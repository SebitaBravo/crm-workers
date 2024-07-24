import axios from "axios";
import { API_BASE_URL } from '../utils/constants.js';

const API_URL = `${API_BASE_URL}/carga-familiar`;

export const getCargaFamiliarService = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las cargas familiares:", error);
    throw error;
  }
};

export const postCargaFamiliarService = async (cargaFamiliar) => {
  try {
    const response = await axios.post(`${API_URL}`, cargaFamiliar);
    return response.data;
  } catch (error) {
    console.error("Error al agregar la carga familiar:", error);
    throw error;
  }
};

export const updateCargaFamiliarService = async (cargaFamiliar) => {
  try {
    const response = await axios.put(`${API_URL}/${cargaFamiliar.id}`, cargaFamiliar);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la carga familiar:", error);
    throw error;
  }
};