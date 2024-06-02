import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage.jsx';
import About from './Pages/About.jsx';
import Recipes from './Pages/Recipes.jsx';
import Chickenlumpia from './Sub_Pages/Chickenlumpia.jsx';
import Porkchop from './Sub_Pages/Porkchop.jsx';
import Porksisig from './Sub_Pages/Porksisig.jsx';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/recipe" element={<Recipes />} />
        <Route path="/Chickenlumpia" element={<Chickenlumpia />} /> {/* Add this line */}
        <Route path="/Porkchop" element={<Porkchop />} /> {/* Add this line */}
        <Route path="/Porksisig" element={<Porksisig />} /> {/* Add this line */}

      </Routes>
    </Router>
  );
}

export default App;
