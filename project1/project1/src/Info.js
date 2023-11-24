import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
let Logo = require('./assets/everest.jpg');
const envelope = <FontAwesomeIcon icon={faEnvelope} />

function Info () {
    return (
        <div className="info">
            <img className="main_img" src={Logo} alt="Mount Everest"/>
            <h1>Mount Everest</h1>
            <h3>Mountain</h3>
            <button className="btn1">{envelope} Email</button>
        </div>
    )
}

export default Info;