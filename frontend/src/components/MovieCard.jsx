import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!movie) return null;

  return (
    <>
      <div className="flex flex-row rounded-md shadow-md bg-gray-50 max-w-4xl mx-auto hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
        {/* Imagen del póster */}
        <div
          className="w-1/3 cursor-pointer"
          onClick={() => setIsZoomed(true)}
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Información de la película */}
        <div className="w-2/3 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-700 truncate">
            {movie.Title}
          </h2>
          <p className="text-sm text-gray-500 mt-2">{movie.Year}</p>
          <p className="text-base text-gray-600 mt-4 mb-4 line-clamp-3">
            {movie.Plot}
          </p>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-500">
            <span className="font-medium text-gray-700">Genre:</span>
            <span>{movie.Genre}</span>
            <span className="font-medium text-gray-700">Director:</span>
            <span>{movie.Director}</span>
          </div>
        </div>
      </div>

      {/* Modal para mostrar el póster ampliado */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setIsZoomed(false)}
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="max-w-4xl max-h-[90vh] object-contain rounded-md shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default MovieCard;
