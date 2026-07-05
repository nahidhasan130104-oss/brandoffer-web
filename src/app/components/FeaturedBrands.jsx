export default function FeaturedBrands() {
    const brands = [
      "Aarong",
      "Cats Eye",
      "Yellow",
      "Apex",
      "Bata",
      "Sailor",
      "Easy",
      "Richman",
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
  
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
            Featured Brands
          </h2>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  
            {brands.map((brand) => (
              <div
                key={brand}
                className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold">
                  {brand}
                </h3>
  
                <p className="text-gray-500 mt-2">
                  Latest Offers
                </p>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }