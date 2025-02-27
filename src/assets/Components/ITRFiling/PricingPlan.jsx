import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

const PricingPlan = ({ title, price, oldPrice, features, discount }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ title, price });
  };

  return (
    <div className="border rounded-lg p-6 shadow-md bg-white relative">
      {discount && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg">
          {discount} off
        </span>
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-2">
        ₹{price}{" "}
        <span className="text-gray-500 line-through text-sm">₹{oldPrice}</span>
      </p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mt-3"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <ul className="mt-3 space-y-2 text-sm text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>✅ {feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingPlan;
