import React from 'react';
import Info from './Info';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interests/>
      <Footer />
    </div>
  );
}

export default App;
