import React, { Component } from "react";
import Fact from "./Fact";
import butterfly from "../assets/butterfly.jpg";
import factidea from "../assets/factidea.jpg";
import factmatter from "../assets/factmatter.jpg";
import factwoods from "../assets/factwoods.jpg";
export default class Facts extends Component {
  render() {
    return (
      <div className="facts">
        <h3>Facts So Romantic</h3>
        <p>
          SCIENCE HAS A POWERFUL VOICE IN TODAY's CULTURE.SO WHAT IS IT SAYING?
        </p>
        <button>SEE ALL BLOG POSTS</button>
        <div className="display">
          <Fact
            value={{
              imageUrl: factidea,
              type: "BIOLOGY",
              title: "Why the Laws of Physics Are Inevitable",
              desciption:
                "Imagine that every morning your child and her classmates take a COVID-19 test that offers results within a half hour, showing the transmission risk for that day. Those who might infect…",
            }}
          />
          <Fact
            value={{
              imageUrl: butterfly,
              type: "IDEAS",
              title: "You Want to See My data?",
              desciption:
                "Stuart Ritchie is a Lecturer in the Social, Genetic and Developmental Psychiatry Centre at King’s College London. His new book, Science Fictions: How Fraud, Bias, Negligence and Hype…",
            }}
          />
          <Fact
            value={{
              imageUrl: factmatter,
              type: "BIOLOGY",
              title: "How Your Heart Influences What You Perceive and Fear",
              desciption:
                "Reprinted with permission from Quanta Magazine‘s Abstractions blog.We consider the brain the very center of who we are and what we do: ruler of our senses, master of our movements; generator…",
            }}
          />
          <Fact
            value={{
              imageUrl: factwoods,
              type: "MATTER",
              title: "Do WE Need a Theory of Everything/",
              desciption:
                "I get constantly asked if I could please comment on other people’s theories of everything. That could be Garrett Lisi’s E8 theory or Eric Weinstein’s geometric unity or Stephen Wolfram’s…",
            }}
          />
        </div>
      </div>
    );
  }
}
