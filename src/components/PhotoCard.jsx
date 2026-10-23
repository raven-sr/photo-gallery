export default function PhotoCard({ photo, isFavorite, onToggleFavorite }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img
          src={`https://picsum.photos/id/${photo.id}/600/400`}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="h-56 w-full object-cover"
        />

        <button
          type="button"
          onClick={() => onToggleFavorite(String(photo.id))}
          aria-label={
            isFavorite ? "Remove from favourites" : "Add to favourites"
          }
          aria-pressed={isFavorite}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl shadow-md transition hover:scale-110"
        >
          <span className={isFavorite ? "text-red-500" : "text-gray-500"}>
            {isFavorite ? "♥" : "♡"}
          </span>
        </button>
      </div>

      <div className="p-4">
        <h2 className="truncate text-base font-semibold text-gray-800">
          {photo.author}
        </h2>
      </div>
    </article>
  );
}