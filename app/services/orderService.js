import axios from 'axios';

const API_URL = 'http://localhost:8000/api/orders';

/**
 * Fetches all orders for the authenticated user.
 * 
 * @returns {Promise<Array>} List of orders.
 */
export const getOrders = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
