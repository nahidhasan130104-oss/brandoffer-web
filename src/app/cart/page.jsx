"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        🛒 Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            Your Cart is Empty
          </h2>
          <p className="text-gray-500 mt-2">
            Add some products to start shopping.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 border rounded-xl p-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-bold">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    ⭐ {item.rating}
                  </p>

                  <p className="text-lg font-semibold mt-2">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 w-9 h-9 rounded-full text-xl"
                  >
                    -
                  </button>

                  <span className="font-bold text-lg">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 w-9 h-9 rounded-full text-xl"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <p className="font-bold text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t pt-6 flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Total: ${totalPrice.toFixed(2)}
              </h2>
            </div>

            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
              >
                Clear Cart
              </button>

              <button
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}