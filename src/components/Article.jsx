import React, { Component } from "react";

export default class Article extends Component {
  render() {
    const { title, description, author, imageUrl } = this.props.value;
    return (
      <div className="article">
        <img src={imageUrl} alt="Not Found" />
        <h5>{title}</h5>
        <p>{description}</p>
        <h6>{author}</h6>
      </div>
    );
  }
}
