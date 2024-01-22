import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

let pin = <FontAwesomeIcon icon={faLocationDot} />

function Card (props) {
    return (
        <div className="card">
            <div className="column">
                <img className="card-img" src={`../assets/${props.img}`} alt="A lake with Mount Fuji in the background"/>
            </div>
            <div className="column main-text">
                <h2 className="loc-maps"><span>{pin} </span><span className="location">{props.location}</span><span className="g-maps"> <a href={props.gMaps} target="_blank" rel="noopener noreferrer">View on Google Maps</a></span></h2>
                <h1 className="title">{props.title}</h1>
                <p><span className="date">{props.startDate} -</span><span className="date"> {props.endDate}</span></p>
                <p className="description">{props.description1}</p>
                <p className="description">{props.description2}</p>
                <p className="description">{props.description3}</p>
            </div>
           
            
        </div>
    )
}

export default Card;