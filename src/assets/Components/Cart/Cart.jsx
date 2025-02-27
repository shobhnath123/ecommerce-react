import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="mt-8 p-4 border rounded-lg bg-gray-100">
      <h2 className="text-lg font-bold">🛒 Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="mt-2">
          {cart.map((item, index) => (
            <li key={index} className="border-b py-2">
              {item.title} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
