import Hero from "@/components/Hero";
import MovieSection from "@/components/MovieSection";
import { endpoints } from "@/lib/endpoints";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <div id="peliculas" className="px-8 pt-12">
        <MovieSection title="Películas en tendencia" endpoint={endpoints.trendingMovies} />
        <MovieSection title="Películas populares" endpoint={endpoints.popularMovies} />
        <MovieSection title="Mejor puntuadas" endpoint={endpoints.topRatedMovies} />
        <MovieSection title="En cartelera" endpoint={endpoints.nowPlaying} />
        <MovieSection title="Próximos estrenos" endpoint={endpoints.upcoming} />
      </div>
    </div>
  );
}