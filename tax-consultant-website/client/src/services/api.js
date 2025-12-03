import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Tax Calculator API calls
export const calculateTax = async (data) => {
  try {
    const response = await api.post('/tax/calculate', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getTaxInfo = async () => {
  try {
    const response = await api.get('/tax/info');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Export the api instance for other uses
export default api;
