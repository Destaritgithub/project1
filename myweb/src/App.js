import React from 'react';
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Skills from './component/Skills.jsx';
import Work from './component/Work.jsx';
import Contact from './component/Contact.jsx';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
