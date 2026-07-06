"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        BD Shopping
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>

        <Link href="/wishlist" className="relative hover:text-gray-300">
          ❤️ Wishlist

          <span className="ml-2 bg-pink-500 text-white px-2 py-1 rounded-full text-sm">
            {wishlist.length}
          </span>
        </Link>

        <Link href="/cart" className="relative hover:text-gray-300">
          🛒 Cart

          <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}