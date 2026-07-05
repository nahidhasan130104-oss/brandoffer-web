import ProductCard from "./ProductCard";
import products from "../data/product";

export default function ProductGrid({ search }) {
    const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase())
);
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">
          Recommended Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
  filteredProducts.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      image={product.image}
      title={product.title}
      price={product.price}
      rating={product.rating}
      discount={product.discount}
    />
  ))
) : (
  <p className="text-center text-gray-500 col-span-full">
    No products found.
  </p>
)}
        </div>
      </div>
    </section>
  );
}