import memesData from '../memesData'
import React from 'react'

export default function Meme () {

    const[meme, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random()  * memesArray.length);
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: memesArray[randomIndex].url
        }));
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top"/>
                <input type="text" className="form--input" placeholder="Bottom"/>
                <button onClick={ getMemeImage } className="form--button">Get a new meme image  🖼</button>
            </div>
            <img className="" src={ meme.randomImage } alt="meme" />
        </main>
    )
}
