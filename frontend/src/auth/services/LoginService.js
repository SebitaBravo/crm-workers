import { API_BASE_URL } from '../../utils/constants';

export const loginService = async (usuario, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, password }),
    });

    if (response.ok) {
        const token = await response.json();
        return token;
    }

    throw new Error('Invalid credentials');

}