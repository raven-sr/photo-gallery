import { useEffect, useReducer } from "react";
import Gallery from "./components/Gallery";
import favoritesReducer, {
  initializeFavorites,
} from "./reducers/favoritesReducer";

export default function App() {
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    undefined,
    initializeFavorites
  );

  useEffect(() => {
    localStorage.setItem("favoritePhotos", JSON.stringify(favorites));
  }, [favorites]);

  function handleToggleFavorite(photoId) {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: photoId,
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-purple-700">
              Photo Gallery
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              A collection of beautiful photographs
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
            <span className="text-lg">♥</span>
            <span>{favorites.length} Favourites</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <Gallery
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>

      <footer className="border-t border-gray-200 bg-white px-5 py-6 text-center text-sm text-gray-500">
         <p>© {new Date().getFullYear()} Siva Sundaram. All rights reserved.</p>
      </footer>
    </div>
  );
}