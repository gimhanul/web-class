import React from 'react'

export default function Meme () {

    const[meme, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState([]);
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json();
            setAllMemeImages(data.data.memes);
        }

        getMemes();
    }, [])

    function getMemeImage() {
        const randomIndex = Math.floor(Math.random()  * allMemeImages.length);
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: allMemeImages[randomIndex].url
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMemeImage(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            };
        });
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top"
                    value={meme.topText}
                    onChange={handleChange}
                    name="topText"
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom"
                    value={meme.bottomText}
                    onChange={handleChange}
                    name="bottomText"
                />
                <button onClick={ getMemeImage } className="form--button">Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img className="meme--image" src={ meme.randomImage } alt="meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
