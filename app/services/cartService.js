import axios from 'axios';

const API_URL = 'http://localhost:8000/api/cart';

/**
 * Adds a product to the cart.
 * 
 * @param {number} productId - The ID of the product to add.
 * @param {number} quantity - The quantity of the product to add.
 * @returns {Promise<Object>} The updated cart data.
 */
export const addToCart = async (productId, quantity) => {
    const response = await axios.post(`${API_URL}/add`, { productId, quantity });
    return response.data;
};

/**
 * Removes a product from the cart.
 * 
 * @param {number} productId - The ID of the product to remove.
 * @returns {Promise<Object>} The updated cart data.
 */
export const removeFromCart = async (productId) => {
    const response = await axios.delete(`${API_URL}/remove/${productId}`);
    return response.data;
};

/**
 * Fetches the current cart data.
 * 
 * @returns {Promise<Object>} The current cart data.
 */
export const getCart = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
};
