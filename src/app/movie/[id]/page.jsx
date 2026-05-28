"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { getMovieDetail, IMAGE_BASE_URL } from "@/lib/endpoints";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(getMovieDetail(id));
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        setError("No se pudieron cargar los datos.");
        setLoading(false);
      }
    };

    if (id) fetchMovie();
  }, [id]);

  if (loading) return <p className="text-zinc-500 text-sm">Cargando...</p>;
  if (error) return <p className="text-red-500 text-sm">{error}</p>;
  if (!movie) return null;

  const imageUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : null;

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/" className="text-zinc-400 hover:text-white text-sm transition-colors mb-8 inline-block">
        ← Volver al inicio
      </Link>

      <div className="flex flex-col md:flex-row gap-10">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={movie.title}
            width={300}
            height={450}
            className="rounded-md object-cover shrink-0"
          />
        )}

        <div className="flex flex-col gap-4">
          <h1 className="text-white text-3xl font-bold">{movie.title}</h1>
          <p className="text-zinc-400 text-sm leading-relaxed">{movie.overview}</p>

          <div className="border-t border-zinc-800 pt-4 grid grid-cols-2 gap-y-3 text-sm">
            <span className="text-zinc-500">Fecha de estreno</span>
            <span className="text-white">{movie.release_date}</span>

            <span className="text-zinc-500">Duración</span>
            <span className="text-white">{movie.runtime} min</span>

            <span className="text-zinc-500">Puntuación</span>
            <span className="text-yellow-400">⭐ {movie.vote_average?.toFixed(1)}</span>

            <span className="text-zinc-500">Idioma original</span>
            <span className="text-white">{movie.original_language?.toUpperCase()}</span>

            <span className="text-zinc-500">Estado</span>
            <span className="text-white">{movie.status}</span>

            <span className="text-zinc-500">Géneros</span>
            <span className="text-white">{movie.genres?.map((g) => g.name).join(", ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}