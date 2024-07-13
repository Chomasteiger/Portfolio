// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import GoogleAnalytics from './GoogleAnalytics';
import Home from './pages/Home';
import About from './pages/About';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';
import Project6 from './pages/Project6';

const TRACKING_ID = "G-ZM8F0WPQ8D"; // Reemplaza con tu propio ID de seguimiento
ReactGA.initialize(TRACKING_ID);

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

const App = () => (
  <Router>
    <GoogleAnalytics />
    <TrackPageView />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project1" element={<Project1 />} />
      <Route path="/project2" element={<Project2 />} />
      <Route path="/project3" element={<Project3 />} />
      <Route path="/project4" element={<Project4 />} />
      <Route path="/project5" element={<Project5 />} />
      <Route path="/project6" element={<Project6 />} />
    </Routes>
  </Router>
);

export default App;
