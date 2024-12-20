import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("title");

  const handleSearch = () => {
    if (!query) return;
    onSearch(query, searchType);
  };

  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 justify-center">
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="border border-gray-300 py-2 px-4 rounded bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="title">Search by Title</option>
        <option value="id">Search by IMDb ID</option>
      </select>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 border border-gray-300 py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={`Enter movie ${searchType === "title" ? "title" : "ID"}...`}
      />
      <button
        onClick={handleSearch}
        className='bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
