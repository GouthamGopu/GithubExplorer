// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import RepositoryPage from './components/RepositoryPage';
import Explore from './components/Explore';
import About from './components/About';
import Contact from './components/Contact';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/repository/:owner/:repo" element={<RepositoryPage />} />
    </Routes>
  </Router>
);

export default App;
