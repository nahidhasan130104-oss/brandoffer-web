export default function SearchBar({
  search = "",
  setSearch = () => {},
}) {
  return (
    <section className="max-w-5xl mx-auto mt-12 px-6">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Brand..."
          className="flex-1 border rounded-lg px-4 py-3"
        />

        <select className="border rounded-lg px-4 py-3">
          <option>All Categories</option>
          <option>Fashion</option>
          <option>Shoes</option>
          <option>Electronics</option>
          <option>Food</option>
        </select>
      </div>
    </section>
  );
}