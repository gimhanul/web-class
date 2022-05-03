import memesData from '../memesData'

export default function Meme () {
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        console.log(memesArray[Math.floor(Math.random()  * memesArray.length)].url);
        console.log("hello");
    }

    return (
        <main>
            <form className="form">
                <input type="text" className="form--input" placeholder="Top"/>
                <input type="text" className="form--input" placeholder="Bottom"/>
                <button onClick={ getMemeImage } className="form--button">Get a new meme image  🖼</button>
            </form>
        </main>
    )
}
