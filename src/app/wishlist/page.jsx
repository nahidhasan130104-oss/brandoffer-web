"use client";

import Link from "next/link";
import { useWishlist } from "../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link
        href="/"
        className="text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold my-6">
        ❤️ My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="font-bold text-lg">
                  {product.title}
                </h2>

                <p className="text-yellow-500 mt-2">
                  ⭐ {product.rating}
                </p>

                <p className="text-xl font-bold mt-2">
                  ${product.price}
                </p>

                <Link
                  href={`/product/${product.id}`}
                  className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}