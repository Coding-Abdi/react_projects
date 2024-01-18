import React from 'react';

function Card (props) {
    return (
        <div className="card">
            <div className="column">
                <img className="card-img" src={`../assets/${props.img}`} alt="A lake with Mount Fuji in the background"/>
            </div>
            <div className="column">
                <h2 className="loc-maps"><span className="location">{props.location}</span><span className="g-maps"> {props.gMaps}</span></h2>
                <p className="title">{props.title}</p>
                <p><span>{props.startDate} -</span><span> {props.endDate}</span></p>
                <p className="description">{props.description}</p>
            </div>
           
            
        </div>
    )
}

export default Card;