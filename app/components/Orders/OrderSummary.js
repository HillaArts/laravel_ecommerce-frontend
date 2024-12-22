import formatCurrency from '../../utils/formatCurrency';

/**
 * OrderSummary Component - Displays the summary of an individual order, including total price.
 * 
 * @param {number} total - The total price of the order.
 */
export default function OrderSummary({ total }) {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
            <p className="text-lg">Total: {total}</p>
        </div>
    );
}
