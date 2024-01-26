import React from 'react';
const logo = require('./images/airbnb_logo.png');


function Navbar () {
    return(
        <nav>
            <img className="logo" src={logo} alt="Airbnb Icon"/>
        </nav>
    )
}

export default Navbar;