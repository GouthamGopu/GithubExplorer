import React from 'react';
import { Button } from './ui/button';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center ">
      <div className="text-center max-w-3xl px-6">
        <h1 className="font-extrabold text-5xl my-8">About GitHub Explorer</h1>
        <p className="text-lg mb-6">
          GitHub Explorer is an intuitive platform designed to help you find and explore GitHub repositories and their authors with ease. Whether you are a developer looking for new projects to contribute to, or you want to discover interesting repositories in your field, this tool is here to assist you.
        </p>
        <p className="text-lg mb-6">
          Our goal is to provide an easy-to-use interface for browsing open-source repositories and learning more about the developers behind them. With just a search, you can find projects, understand their impact, and discover more about their authors.
        </p>
        <p className="text-lg mb-6">
          In addition to repositories, you can explore developer profiles, view their contribution history, and get inspired by the work they are doing across the world. This platform strives to make open-source contributions more accessible and transparent.
        </p>
        <p className="text-lg mb-6">
          GitHub Explorer is powered by the GitHub API, ensuring that you have access to real-time data about repositories, developers, and other important metrics.
        </p>
      </div>
    </div>
  );
};

export default About;
