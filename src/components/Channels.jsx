import React, { Component } from "react";
import ChannelBox from "./ChannelBox";
import alliance from "../assets/alliance.png";
import tlas from "../assets/tlas.jpeg";
import wise from "../assets/wise_sci_and_engineering.png";
import poetry from "../assets/poetry.jpeg";
import bio from "../assets/bio_and_beyond.jpeg";
import earth from "../assets/earth.jpeg";
import abstractions from "../assets/abstractions.jpeg";
import aging from "../assets/aging.png";
export default class Channels extends Component {
  render() {
    return (
      <div className="channels">
        <h2>Channels</h2>
        <p>TUNE IN TO NAUTILUS' DEEP DIVE PORTALS</p>
        <div className="gridDisplay">
          <ChannelBox
            id="grid1"
            value={{
              imageUrl: bio,
              title: "On “Learning the Trees”",
              author: "By Liz Craig-Olins",
            }}
          />
          <ChannelBox
            id="grid2"
            value={{
              imageUrl: wise,

              title: "On “Learning the Trees”",
              author: "By Liz Craig-Olins",
            }}
          />
          <ChannelBox
            id="grid3"
            value={{
              imageUrl: abstractions,
              title: "On “Learning the Trees”",
              author: "By Liz Craig-Olins",
            }}
          />
          <ChannelBox
            id="grid4"
            value={{
              imageUrl: earth,
              title: "On “Learning the Trees”",
              author: "By Liz Craig-Olins",
            }}
          />
          <ChannelBox
            id="grid5"
            value={{
              imageUrl: tlas,
              title: "On “Learning the Trees”",
              author: "By Liz Craig-Olins",
            }}
          />
          <ChannelBox
            id="grid6"
            value={{
              imageUrl:
                "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
              title: "On “Learning the Trees”",
              author: "By Liz Craig-Olins",
            }}
          />
          <ChannelBox
            id="grid7"
            value={{
              imageUrl: poetry,
              title: "On “Learning the Trees”",
              author: "By Liz Craig-Olins",
            }}
          />
          <ChannelBox
            id="grid8"
            value={{
              imageUrl: aging,
              title: "On “Learning the Trees”",
              author: "By Liz Craig-Olins",
            }}
          />
          <ChannelBox
            id="grid9"
            value={{
              imageUrl: alliance,
              title: "On “Learning the Trees”",
              author: "By Liz Craig-Olins",
            }}
          />
        </div>
      </div>
    );
  }
}
