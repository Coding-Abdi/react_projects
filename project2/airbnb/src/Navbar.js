import React from 'react';
let logo = require('./assets/airbnb_logo.png');


function Navbar () {
    return(
        <nav>
            <img className="logo" src={logo} alt="Airbnb Icon"/>
        </nav>
    )
}

export default Navbar;