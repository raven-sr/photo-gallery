export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="w-full max-w-xl">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search photos by author..."
        aria-label="Search photos by author"
        className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-900 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
      />
    </div>
  );
}