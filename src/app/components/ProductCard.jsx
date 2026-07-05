"use client";

import { useCart } from "../context/CartContext";

export default function ProductCard({
  id,
  image,
  title,
  price,
  rating,
  discount,
}) {
  const { addToCart } = useCart();

  const product = {
    id,
    image,
    title,
    price,
    rating,
    discount,
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
          🤖 AI Recommended
        </span>

        <h3 className="font-semibold text-lg mt-3">
          {title}
        </h3>

        <p className="text-yellow-500 mt-2">
          ⭐ {rating}
        </p>

        <div className="flex justify-between items-center mt-3">
          <div>
            <p className="text-xl font-bold">
              ${price}
            </p>

            <p className="text-red-500 text-sm">
              {discount}% OFF
            </p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}