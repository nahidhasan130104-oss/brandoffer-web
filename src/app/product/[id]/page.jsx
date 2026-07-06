"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import products from "../../data/product";
import { useCart } from "../../context/CartContext";

export default function ProductDetails() {
  const params = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>

          <p className="text-yellow-500 text-xl mt-4">
            ⭐ {product.rating}
          </p>

          <p className="text-3xl font-bold mt-4">
            ${product.price}
          </p>

          <p className="text-red-500 mt-2">
            {product.discount}% OFF
          </p>

          <p className="text-gray-600 mt-6">
            This is a premium quality product with modern design,
            excellent performance and fast delivery.
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}