import React from 'react';
let Logo = require('./assets/everest.jpg');

function Info () {
    return (
        <div className="info">
            <img className="main_img" src={Logo} alt="Mount Everest"/>
            <h1>Mount Everest</h1>
            <h3>Mountain</h3>
            <button>Email</button>
            <button>LinkedIn</button>
        </div>
    )
}

export default Info;