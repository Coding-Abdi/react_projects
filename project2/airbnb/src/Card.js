import React from 'react';
let zaf = require('./assets/zaferes.png');
let star = require('./assets/star.png');


function Card () {
    return (
        <div className="card">
            <img className="zaf-img" src={zaf} alt="Katie Zaferes wearing a trisuit and smiling"/>
            <div className="card-stats">
                <img className="star-img" src={star} alt="a small red star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p className="description">Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;