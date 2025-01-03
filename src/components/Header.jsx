import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Github Explorer</Link>
        </h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="hover:font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore" className="hover:font-bold">
                Explore
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:font-bold">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:font-bold">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
