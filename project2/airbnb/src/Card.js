import React from 'react';
// let zaf = require('./assets/zaferes.png');
// let star = require('./assets/star.png');


function Card (props) {
    return (
        <div className="card">
            <img className="zaf-img" src={`../assets/${props.img}`} alt="Katie Zaferes wearing a trisuit and smiling"/>
            <div className="card-stats">
                <img className="star-img" src={`../assets/${props.starImg}`} alt="a small red star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray"> {props.location}</span>
            </div>
            <p className="description">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;