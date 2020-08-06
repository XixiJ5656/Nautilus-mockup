import React, { Component } from "react";

export default class Fact extends Component {
  render() {
    const { imageUrl, type, title, description } = this.props.value;
    return (
      <div className="fact">
        <img src={imageUrl} alt="Not Found" />
        <h5>{type}</h5>
        <p>{title}</p>
        <h6>{description}</h6>
        <button>READ MORE</button>
      </div>
    );
  }
}
