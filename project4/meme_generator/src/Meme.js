import React, { useState } from 'react';
import data from './data';

function Meme () {
    // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/30b1gx.jpg")

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(data)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    return (
        <main>
            <div className="form">
                <input className="form-input" type="text" placeholder="Top text"/>
                <input className="form-input" type="text" placeholder="Bottom text"/>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼 </button>
            </div>
            <div className="meme-div">
            <img className="meme-image" src={meme.randomImage} alt="random memes"/>
            </div>
            
        </main>
    )
}

export default Meme;

