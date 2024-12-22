/**
 * Format a number as a currency string (USD).
 *
 * @param {number} value - The number to format.
 * @returns {string} The formatted currency string.
 */
export default function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
}
