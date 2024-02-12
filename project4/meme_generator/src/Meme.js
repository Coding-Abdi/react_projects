import React, { useState, useEffect } from 'react';

function Meme () {
   const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        console.log("Effect function ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

    }

    return (
        <main>
            <div className="form">
                <input 
                    className="form-input" 
                    type="text" 
                    placeholder="Top text" 
                    name="topText" 
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="form-input"
                    type="text" 
                    placeholder="Bottom text" 
                    name="bottomText" 
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼 </button>
            </div>
            <div className="meme-div">
                <img className="meme-image" src={meme.randomImage} alt="random memes"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}

export default Meme;

