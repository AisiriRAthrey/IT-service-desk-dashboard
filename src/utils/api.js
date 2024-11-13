import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getTickets = () => axios.get(`${API_URL}/tickets`);
export const createTicket = (ticket) => axios.post(`${API_URL}/tickets`, ticket);
export const updateTicket = (id, ticket) => axios.put(`${API_URL}/tickets/${id}`, ticket);
export const deleteTicket = (id) => axios.delete(`${API_URL}/tickets/${id}`);
