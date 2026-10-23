import { useCallback, useMemo, useState } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";

export default function Gallery({ favorites, onToggleFavorite }) {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const filteredPhotos = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(query)
    );
  }, [photos, searchTerm]);

  return (
    <section>
      <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Explore Photos</h2>
          <p className="mt-1 text-sm text-gray-500">
            Discover beautiful photographs from different creators.
          </p>
        </div>

        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
          <p className="mt-4 text-gray-600">Loading photos...</p>
        </div>
      )}

      {!loading && error && (
        <div className="rounded-xl bg-red-50 p-6 text-center text-red-600">
          <p>{error}</p>
          <p className="mt-2 text-sm">Please refresh the page to try again.</p>
        </div>
      )}

      {!loading && !error && filteredPhotos.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-lg font-semibold text-gray-700">
            No photos found
          </p>
          <p className="mt-2 text-gray-500">
            Try searching with another author name.
          </p>
        </div>
      )}

      {!loading && !error && filteredPhotos.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavorite={favorites.includes(String(photo.id))}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}