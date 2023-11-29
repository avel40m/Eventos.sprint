import axios from "axios"

export const loginRequest = async (body) => {
    try {
        const response = await axios.post('http://localhost:3000/api/login',body)
        return await response.data;
    } catch (error) {
        return error
    }
}

export const registerRequest = async (body) => {
    try {
        const response = await axios.post('http://localhost:3000/api/register',body);
        return response.data;
    } catch (error) {
        return error
    }
}