import axios from "axios";
import { API_BASE_URL } from '../utils/constants.js';

const API_URL = `${API_BASE_URL}/roles`;

export const postRolesService = async (nombreRol) => {
  try {
    const response = await axios.post(`${API_URL}`, { nombre: nombreRol });
    return response.data;
  } catch (error) {
    console.error("Error al agregar el rol:", error);
    throw error;
  }
};