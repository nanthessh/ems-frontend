import axios from 'axios';

const API_URL = 'https://localhost:7071/api/employee';
console.log("Check Git Change")
export const getEmployees = () => axios.get(API_URL);
export const addEmployee = (employee) => axios.post(API_URL, employee);
export const updateEmployee = (employee) => axios.put(`${API_URL}/${employee.id}`, employee);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);
