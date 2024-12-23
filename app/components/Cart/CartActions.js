// import formatCurrency from '../utils/formatCurrency';

/**
 * CartActions Component - Displays actions for placing an order or continuing shopping.
 * 
 * @param {Function} onPlaceOrder - The function to place the order.
 */
export default function CartActions({ onPlaceOrder }) {
    return (
        <div className="flex justify-between items-center mt-6">
            <button
                className="bg-green-500 text-white px-6 py-3 rounded-lg"
                onClick={onPlaceOrder}
            >
                Place Order
            </button>
            <button
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg"
                onClick={() => alert('Continue shopping functionality here')}
            >
                Continue Shopping
            </button>
        </div>
    );
}
