import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import cardData from './cardData';
import './App.css';
// let zaf = require('./assets/zaferes.png');
// let star = require('./assets/star.png');


function App() {
  const data = cardData.map(item => {
      return <Card 
                img={item.img} 
                starImg={item.starImg}
                rating={item.rating}
                reviewCount={item.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}  
                />
    })
    return (
    <div className="App">
      <Navbar />
      <Hero />
      {data}
    </div>
  );
}


// img={zaf}
// starImg={star}
// rating="5.0"
// reviewCount={6}
// location="USA"
// title="Life lessons with Katie Zaferes"
// price={136}

export default App;
