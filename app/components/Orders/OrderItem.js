/**
 * OrderItem Component - Displays the details of a single order.
 * 
 * @param {Object} order - The order object containing details of the order.
 */
export default function OrderItem({ order }) {
    return (
        <div className="bg-white p-4 mb-4 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold">Order #{order.id}</h2>
            <p className="text-gray-500">Total: {order.total}</p>
            <ul className="mt-2">
                {order.items.map((item) => (
                    <li key={item.id} className="text-gray-700">
                        {item.name} x {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}
