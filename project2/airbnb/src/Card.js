import React from 'react';
// let zaf = require('./assets/zaferes.png');
// let star = require('./assets/star.png');


function Card (props) {
    let badgeText
    if (props.openSlots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img className="card-img" src={`../assets/${props.img}`} alt="A selection of experiences"/>
            <div className="card-stats">
                <img className="star-img" src={`../assets/${props.starImg}`} alt="a small red star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray"> {props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;

// {props.openSpots === 0 && <div className="badge">SOLD OUT</div>}

/* <p className="description">{props.description}</p> */