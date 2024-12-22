import { useState, useEffect } from 'react';
import { getCart, addToCart, removeFromCart } from '../services/cartService';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';
import CartActions from '../components/Cart/CartActions';

/**
 * CartPage Component - Displays the user's cart and allows adding/removing items.
 */
export default function CartPage() {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCart() {
            const data = await getCart();
            setCart(data);
            setLoading(false);
        }
        fetchCart();
    }, []);

    const handleRemove = async (productId) => {
        await removeFromCart(productId);
        setCart(cart.filter((item) => item.id !== productId));
    };

    const handleAdd = async (productId, quantity) => {
        const updatedCart = await addToCart(productId, quantity);
        setCart(updatedCart);
    };

    const handlePlaceOrder = () => {
        // Place order logic
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-4">Your Cart</h1>
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : cart.length === 0 ? (
                <div className="text-center text-gray-500">Your cart is empty!</div>
            ) : (
                <div>
                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            handleAdd={handleAdd}
                            handleRemove={handleRemove}
                        />
                    ))}
                    <CartSummary cart={cart} />
                    <CartActions handlePlaceOrder={handlePlaceOrder} />
                </div>
            )}
        </div>
    );
}
