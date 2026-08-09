import axios from 'axios';
const BASE_URL = 'http://localhost:8080/students';

export const getStudents = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const addStudent = async (student) => {
    const response = await axios.post(BASE_URL, student);
    return response.data;
};

export const deleteStudent = async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}`);
}