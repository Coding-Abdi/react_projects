import React from 'react';
const heroImg = require('./images/hero.png');


function Hero () {
    return (
        <section className="hero">
            <img className="hero-img" src={heroImg} alt="Collection of people engaged in fun activities, such as swimming and yoga"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;