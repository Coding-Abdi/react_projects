import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import './App.css';
let zaf = require('./assets/zaferes.png');
let star = require('./assets/star.png');


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img={zaf}
        starImg={star}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
       />
    </div>
  );
}

export default App;
