import React, { useState, useEffect } from "react";
import "../css/Meme.css";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState({});

  // get API call for memes data
  useEffect(() => {
    async function getMemesData() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data);
    }

    getMemesData();
  }, []);

  // get image for meme
  function getMemeImage() {
    const memesArray = allMemes.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url;

    setMeme(prev => {
      return {
        ...prev,
        randomImage: url,
      };
    });
  }

  // get text for meme
  function getMemeText(event) {
    const { name, value } = event.target;

    setMeme(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <section className="meme">
      <div className="container">
        <div className="meme-inner">
          <form className="meme-form" action="">
            {/* top meme text */}
            <input
              onChange={getMemeText}
              name="topText"
              value={meme.topText}
              className="form-input"
              type="text"
              placeholder="Top Text"
            />

            {/* bottom meme text */}
            <input
              onChange={getMemeText}
              name="bottomText"
              value={meme.bottomText}
              className="form-input"
              type="text"
              placeholder="Bottom Text"
            />
          </form>

          {/* get image btn */}
          <button onClick={getMemeImage} id="memeBtn">
            Get a new meme image ✔
          </button>

          <div className="meme">
            <div className="meme-image">
              <img src={meme.randomImage} alt="" />
            </div>
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
