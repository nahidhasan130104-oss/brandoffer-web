const categories = [
    "Electronics",
    "Fashion",
    "Grocery",
    "Beauty",
    "Sports",
    "Books",
    "Home",
    "Toys",
  ];
  
  export default function Categories() {
    return (
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-5">
            Shop by Category
          </h2>
  
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {categories.map((item) => (
              <button
                key={item}
                className="whitespace-nowrap px-6 py-3 bg-white rounded-full shadow hover:bg-black hover:text-white transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }