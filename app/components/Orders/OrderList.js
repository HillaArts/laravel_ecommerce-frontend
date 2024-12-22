/**
 * OrderList Component - Displays the list of orders placed by the user.
 * 
 * @param {Array} orders - The array of orders to display.
 */
export default function OrderList({ orders }) {
    return (
        <div className="space-y-4">
            {orders.map((order) => (
                <OrderItem key={order.id} order={order} />
            ))}
        </div>
    );
}
