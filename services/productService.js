import api from './api';

/**
 * Fetches all products.
 * @returns {Promise} - Promise resolving to the list of products.
 */
export const getAllProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Fetches a single product by ID.
 * @param {string} productId - The ID of the product to fetch.
 * @returns {Promise} - Promise resolving to the product data.
 */
export const getProductById = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    throw error;
  }
};

// /**
//  * Creates a new product (Admin only).
//  * @param {Object} productData - The data for the new product (e.g., name, price, description).
//  * @returns {Promise} - Promise resolving to the created product data.
//  */
// export const createProduct = async (productData) => {
//   try {
//     const response = await api.post('/products', productData);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating product:', error);
//     throw error;
//   }
// };

// /**
//  * Updates an existing product (Admin only).
//  * @param {string} productId - The ID of the product to update.
//  * @param {Object} updatedData - The updated product data.
//  * @returns {Promise} - Promise resolving to the updated product data.
//  */
// export const updateProduct = async (productId, updatedData) => {
//   try {
//     const response = await api.put(`/products/${productId}`, updatedData);
//     return response.data;
//   } catch (error) {
//     console.error(`Error updating product with ID ${productId}:`, error);
//     throw error;
//   }
// };

// /**
//  * Deletes a product (Admin only).
//  * @param {string} productId - The ID of the product to delete.
//  * @returns {Promise} - Promise resolving to the deletion confirmation.
//  */
// export const deleteProduct = async (productId) => {
//   try {
//     const response = await api.delete(`/products/${productId}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error deleting product with ID ${productId}:`, error);
//     throw error;
//   }
// };
