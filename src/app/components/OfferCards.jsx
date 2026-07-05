export default function OfferCards() {
    const offers = [
      {
        brand: "Aarong",
        discount: "30% OFF",
        valid: "15 July 2026",
      },
      {
        brand: "Bata",
        discount: "40% OFF",
        valid: "20 July 2026",
      },
      {
        brand: "Yellow",
        discount: "25% OFF",
        valid: "18 July 2026",
      },
      {
        brand: "Cats Eye",
        discount: "35% OFF",
        valid: "25 July 2026",
      },
    ];
  
    return (
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Latest Offers
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
          {offers.map((offer) => (
            <div
              key={offer.brand}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <h3 className="text-2xl font-bold">
                {offer.brand}
              </h3>
  
              <p className="text-red-600 text-3xl font-bold mt-4">
                {offer.discount}
              </p>
  
              <p className="text-gray-500 mt-3">
                Valid: {offer.valid}
              </p>
  
              <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }