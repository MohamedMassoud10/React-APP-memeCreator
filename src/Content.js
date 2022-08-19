import React from "react";
import Data from "./Data";
console.log(Data.length)
export default function Content() {
    let randomData
    let [memeImge, setMemeImge] = React.useState({
        img:"https://a.pinatafarm.com/474x312/64a9b2fc2d/worst-mistake-of-my-life.jpg"
    })
    function Random() {
        randomData = Data[Math.floor(Math.random() * Data.length)]
        setMemeImge(randomData)
    }
    let [meme, setmeme] = React.useState({
        topText: "",
        bottomText:""
    })
    function handleChange(event) {
        let { name, value} = event.target
        setmeme((prevmeme) => {
            return{
            ...prevmeme,
            [name]:value
        }})
    }
    function handleClick() {
        Random();
    }
    return (
        <div className="content">
            <div className="inputs">
                <input type="text" className="left"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    
                />
                <input type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            </div>
            <button className="btn" typeof="submit" onClick={handleClick}>
                Get a new meme image  🖼
            </button>
            <div className="img" >
                <img src={memeImge.img} alt="" />
                <img src={memeImge} alt="" />
                <h2 className="top"> {meme.topText}</h2>
                <h2 className="buttom">{ meme.bottomText}</h2>
            </div>
        </div>
    )
}

//https://storyblok-image.ef.com/unsafe/559x447/filters:focal(280x224:281x225):quality(100)/f/60990/559x447/79b6d0bbae/yes-and-no-meme.jpg
//https://englishonline.britishcouncil.org/wp-content/uploads/2021/11/image2-drake-posting-meme.jpg