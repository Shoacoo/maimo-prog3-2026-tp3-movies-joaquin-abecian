import Link from "next/link";
import { IMAGE_BASE_URL } from "@/lib/endpoints";

export default function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : null;

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden flex flex-col">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-gray-700 flex items-center justify-center text-gray-400">
          Sin imagen
        </div>
      )}

      <div className="p-3 flex flex-col gap-2 flex-1">
       <h3 className="text-black text-sm font-semibold leading-tight">{movie.title}</h3>
<p className="text-zinc-500 text-xs">{movie.release_date}</p>
<p className="text-black text-xs">⭐ {movie.vote_average?.toFixed(1)}</p>
<Link
  href={`/movie/${movie.id}`}
  className="text-center text-xs border border-black text-black hover:bg-black hover:text-white py-1.5 rounded transition-colors mt-1"
>
  Ver detalle
</Link>
      </div>
    </div>
  );
}