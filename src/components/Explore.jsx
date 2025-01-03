import React, { useState } from 'react';
import axios from 'axios';
import { Button } from './ui/button';
import { LuSearchCode } from "react-icons/lu";
import RepositoryCard from './RepositoryCard';  

const Explore = () => {
  const [query, setQuery] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false); 
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (!query.trim()) {
      return alert("Please enter a search query.");
    }

    setLoading(true);
    setNoResults(false); 
    try {
      const encodedQuery = encodeURIComponent(query.trim());
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${encodedQuery}`
      );
      setRepositories(response.data.items);

      // Set noResults to true if no repositories are returned
      if (response.data.items.length === 0) {
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-[50%] p-6">
        <div className="flex items-center justify-center gap-4">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for repositories..."
            className="flex-1 p-3 px-6 focus:ring-0 rounded-3xl focus:outline-none border border-gray-300"
          />
          <Button
            onClick={handleSearch}
            className="px-4 py-5 rounded-3xl flex items-center gap-2"
            variant="outline"
          >
            <LuSearchCode /> Search
          </Button>
        </div>
      </div>
      <div className="w-full p-6">
        {loading ? (
          <p className="text-center text-xl">Loading...</p>
        ) : noResults ? (
          <p className="text-center text-xl text-gray-500">
            Oops, no repositories found!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo) => (
              <RepositoryCard 
                key={repo.id} 
                repo={repo} 
                owner={repo.owner} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;