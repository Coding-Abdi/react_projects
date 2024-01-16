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
                {...item} 
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

// ***First iteration of props - only returned one card***
// img={zaf}
// starImg={star}
// rating="5.0"
// reviewCount={6}
// location="USA"
// title="Life lessons with Katie Zaferes"
// price={136}

// ***Second iteration of props - returned all cards***
// key={item.id} 
// img={item.img} 
// starImg={item.starImg}
// rating={item.rating}
// reviewCount={item.reviewCount}
// location={item.location}
// title={item.title}
// description={item.description}
// price={item.price}
// openSpots={item.openSpots} 


//***Third iteration of props. The change below in App.js also required us to change the props syntax in Card.js from, for example, props.price to props.item.price */
// key={item.id} 
// item={item} 

/***Fourth and final iteration of props using the spread operator. Props is an object, and an object can be spread into its multiple key-value pairs using the spread operator. 
 * The benefits of using a spread operator is that it makes the code more concise and saves time. It's also easier to update components since you can change the props without having to modify the component itself.
 * The negatives are that it makes the code less declarative, and difficult to understand at a glance. It also makes the code less maintainable, since it can be hard to track what props a component is using when you use the spread operator.
 ***/
// key={item.id} 
// {...item} 
