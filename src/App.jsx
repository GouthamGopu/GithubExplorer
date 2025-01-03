// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import RepositoryPage from './components/RepositoryPage';
import UserPage from './components/UserPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repository/:owner/:repo" element={<RepositoryPage />} />
      <Route path="/user/:username" element={<UserPage />} />
    </Routes>
  </Router>
);

export default App;
