import React from 'react';

const RepositoryCard = ({ repo, owner }) => {
  return (
    <div className="p-4 bg-[#171717] rounded-2xl shadow-md hover:shadow-lg transition">
      <a 
      href={`https://github.com/${owner.login}/`}
      target="_blank"
      >
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={owner.avatar_url} 
          alt={owner.login} 
          className="w-10 h-10 rounded-full" 
        />
        <span className="font-semibold text-lg">{owner.login}</span>
      </div>
      </a>
      <h3 className="text-xl font-semibold">{repo.name}</h3>
      <p className="text-sm text-gray-600">{repo.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Repository
        </a>
        <span className="text-gray-500 text-sm">
          Stars: {repo.stargazers_count}
        </span>
      </div>
    </div>
  );
};

export default RepositoryCard;
