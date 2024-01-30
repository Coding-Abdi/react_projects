import React, { useState } from 'react';
import data from './data';

function Meme () {
    const [memeImage, setMemeImage] = useState("yes")

    function getMemeImage() {
        const memesArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }

    return (
        <main>
            <div className="form">
                <input className="form-input" type="text" placeholder="Top text"/>
                <input className="form-input" type="text" placeholder="Bottom text"/>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼 </button>
            </div>
            <div className="meme-div">
            <img className="meme-image" src={memeImage} alt="random memes"/>
            </div>
            
        </main>
    )
}

export default Meme;

