import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrinTears } from '@fortawesome/free-regular-svg-icons';
let logo = <FontAwesomeIcon icon={faFaceGrinTears} size="2x" beat />


function Navbar () {
    return (
        <nav className="nav">
            <h3 className="logo">{logo}</h3>
            <h1>Meme Generator</h1>
        </nav>
    )
}

export default Navbar;

