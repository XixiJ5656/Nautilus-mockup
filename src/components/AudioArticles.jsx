import React, { Component } from "react";
import Article from "./Article";
import culture from "../assets/culture.png";
import sky from "../assets/biology_03.png";
import anti from "../assets/biology_04.jpg";
export default class AudioArticles extends Component {
  render() {
    return (
      <div className="audioarticles">
        <h2>Listen To Nautilus</h2>
        <p>NARRATED VERSIONS OF OUR STORIES</p>
        <button>ALL AUDIO ARTICLES</button>
        <div className="display">
          <Article
            value={{
              imageUrl: sky,
              title: "BIOLOGY",
              description: "Turning Back the Clock on Human Evolution",
              author: "By Amy Maxmen",
            }}
          />
          <Article
            value={{
              imageUrl: anti,
              title: "BIOLOGY",
              description: "Yes, Your Brain Does Process Information",
              author: "By Brian Gallagher",
            }}
          />
          <Article
            value={{
              imageUrl: culture,
              title: "CULTURE",
              description: "Why the Russians Decapitated Major Tom",
              author: "By Roberto Kaz",
            }}
          />
        </div>
      </div>
    );
  }
}
