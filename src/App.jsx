import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project1" element={<Project />} />
      <Route path="/project2" element={<Project1 />} />
      <Route path="/project3" element={<Project2 />} />
      <Route path="/project4" element={<Project3 />} />
      <Route path="/project5" element={<Project4 />} />
    </Routes>
  </Router>
);

export default App;
