import React from 'react';
import { Button } from './ui/button';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-extrabold text-5xl mb-4">
          Hi, Welcome to Github Explorer,
        </h1>
        <p className="text-lg mb-6">
        Explore repositories, discover authors, and connect with innovation.
        </p>
        <Link to={'/explore'}>
        <Button variant="outline">Explore Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
