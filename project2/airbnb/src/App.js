import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from './data';
import './App.css';
// let zaf = require('./assets/zaferes.png');
// let star = require('./assets/star.png');


function App() {
  const cards = data.map(item => {
      return <Card
                key={item.id} 
                img={item.img} 
                starImg={item.starImg}
                rating={item.rating}
                reviewCount={item.reviewCount}
                location={item.location}
                title={item.title}
                description={item.description}
                price={item.price}
                openSpots={item.openSpots}  
                />
    })
    return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
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
