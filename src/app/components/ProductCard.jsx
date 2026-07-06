"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({
  id,
  image,
  title,
  price,
  rating,
  discount,
}) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const product = {
    id,
    image,
    title,
    price,
    rating,
    discount,
  };

  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Wishlist */}
      <button
        type="button"
        onClick={() => toggleWishlist(product)}
        className="absolute top-3 right-3 text-2xl z-10"
      >
        {isWishlisted(id) ? "❤️" : "🤍"}
      </button>

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
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            🛒 Add to Cart
          </button>

          <Link
            href={`/product/${id}`}
            className="text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}