// import formatCurrency from '../utils/formatCurrency';

/**
 * CartItem Component - Displays a single item in the cart.
 * 
 * @param {Object} item - The item object containing details about the product in the cart.
 * @param {Function} onRemove - The function to remove an item from the cart.
 * @param {Function} onAdd - The function to add more quantity of an item to the cart.
 */
export default function CartItem({ item, onRemove, onAdd }) {
    return (
        <div className="flex justify-between items-center bg-white p-4 mb-4 shadow-md rounded-lg">
            <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>{item.price} x {item.quantity}</p>
            </div>
            <div className="flex space-x-4">
                <button
                    onClick={() => onAdd(item.id, item.quantity + 1)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Add More
                </button>
                <button
                    onClick={() => onRemove(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                    Remove
                </button>
            </div>
        </div>
    );
}
