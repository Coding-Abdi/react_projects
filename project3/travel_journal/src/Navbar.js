import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons'

let logo = <FontAwesomeIcon icon={faEarthAmerica} size="2x" beat />



function Navbar () {
   
    return (
        <nav>
            <h3 className="logo">{logo}</h3>
            <h2 className="nav-title">my travel journal</h2>
        </nav>
    )
}

export default Navbar;