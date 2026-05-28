"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export default function MovieSection({ title, endpoint }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(endpoint);
        setMovies(response.data.results);
        setLoading(false);
      } catch (err) {
        setError("No se pudieron cargar los datos.");
        setLoading(false);
      }
    };

    fetchMovies();
  }, [endpoint]);

  return (
    <section className="mb-14">
      <h2 className="text-white text-lg font-semibold mb-4 border-l-4 border-white pl-3">
        {title}
      </h2>

      {loading && <p className="text-zinc-500 text-sm">Cargando...</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {!loading && !error && (
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
       {movies.map((movie) => (
  <div key={movie.id} className="shrink-0 w-52">
    <MovieCard movie={movie} />
  </div>
))}
        </div>
      )}
    </section>
  );
}