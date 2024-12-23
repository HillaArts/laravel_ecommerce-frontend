// import formatCurrency from '../utils/formatCurrency';

/**
 * CartSummary Component - Displays the cart summary including total price.
 * 
 * @param {number} total - The total price of the items in the cart.
 */
export default function CartSummary({ total }) {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Cart Summary</h3>
            <p className="text-lg">Total: {total}</p>
        </div>
    );
}
