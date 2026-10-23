export function initializeFavorites() {
  try {
    const savedFavorites = localStorage.getItem("favoritePhotos");
    const parsedFavorites = savedFavorites
      ? JSON.parse(savedFavorites)
      : [];

    return Array.isArray(parsedFavorites)
      ? parsedFavorites.filter((id) => typeof id === "string")
      : [];
  } catch {
    return [];
  }
}

export default function favoritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return state.includes(action.payload)
        ? state.filter((id) => id !== action.payload)
        : [...state, action.payload];

    default:
      return state;
  }
}