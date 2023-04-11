import React from 'react';
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Skills from './component/Skills.jsx';
import Work from './component/Work.jsx';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
