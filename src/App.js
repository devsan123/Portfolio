import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
