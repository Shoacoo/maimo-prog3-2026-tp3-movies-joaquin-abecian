import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <Image
        src="/planet-treasure.jpg"
        alt="Hero Movies"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center px-4">
        <h1 className="mb-2.5 text-6xl font-bold text-white max-md:text-4xl">
          TP-Movies
        </h1>

        <p className="mb-8 text-[1.2rem] text-zinc-300">
          Las mejores películas y series en un solo lugar
        </p>

        <Link
          href="#peliculas"
          className="
            rounded-full
            bg-white
            px-8
            py-3
            text-black
            font-semibold
            no-underline
            transition-all
            duration-300
            hover:bg-zinc-200
          "
        >
          Ver películas
        </Link>
      </div>
    </div>
  );
};

export default Hero;