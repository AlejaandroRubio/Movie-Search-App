import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { seachMoviesByTitle, seachMoviesByImdbId } from "../api";

const HomePage = () => {
  const [movie, setMovie] = useState(null);

  const handleSearch = async (query, searchType) => {
    try {
      let response;
      if (searchType === "title") {
        response = await seachMoviesByTitle(query);
      } else if (searchType === "id") {
        response = await seachMoviesByImdbId(query);
      }
      setMovie(response);
    } catch (error) {
      console.error("Error fetching movie:", error);
      setMovie(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Movie Search App</h1>
        <p className="text-gray-600 mt-2">Find your favorite movies by title or IMDb ID.</p>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-8">
        {movie ? (
          <MovieCard movie={movie} />
        ) : (
          <p className="text-center text-gray-500">Search for a movie to display details.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
