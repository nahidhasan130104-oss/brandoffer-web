"use client";
import Navbar from "./components/Navbar";
import FeaturedBrands from "./components/FeaturedBrands";
import OfferCards from "./components/OfferCards";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import { useState } from "react";
export default function Home() {
  const [search, setSearch] = useState("");
  <SearchBar search={search} setSearch={setSearch}/>
  return (
    <>
      <Navbar />

      <main>
      <section className="text-center mt-24">
  <h1 className="text-6xl font-bold text-blue-700">
    বাংলাদেশের সেরা Fashion Brand অফার
  </h1>

  <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
    Bata, Apex, Yellow, Cats Eye, Aarong, Sailorসহ
    বাংলাদেশের জনপ্রিয় সব ব্র্যান্ডের অফার
    এক জায়গায় খুঁজে নিন।
  </p>

  <div className="mt-10 flex justify-center gap-5">
    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
      Explore Offers
    </button>

    <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-100">
      View Brands
    </button>
  </div>
</section>
      </main>
      <SearchBar
  search={search}
  setSearch={setSearch}
/>
      <Categories />
      <FeaturedBrands />
      <OfferCards />
      <ProductGrid search={search} />

    </>
  );
}