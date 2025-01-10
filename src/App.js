import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage.jsx';
import About from './Pages/About.jsx';
import Recipes from './Pages/Recipes.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/recipe" element={<Recipes />} />
      </Routes>
    </Router>
  );
}

export default App;
