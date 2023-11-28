import React from 'react';
let zaf = require('./assets/zaferes.png');
let star = require('./assets/star.png');


function Card () {
    return (
        <div className="card">
            <img className="zaf-img" src={zaf} alt="Katie Zaferes wearing a trisuit and smiling"/>
            <img className="star-img" src={star} alt="a small red star"/>
            <p className="rating">5.0 -6- * USA</p>
            <p className="description">Life lessons with Katie Zaferes</p>
            <p className="price">From $136 / person</p>
        </div>
    )
}

export default Card;