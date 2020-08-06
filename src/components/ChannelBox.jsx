import React, { Component } from "react";

export default class ChannelBox extends Component {
  render() {
    return (
      <div className="gridBox">
        <p>Channel Name</p>
        <img
          className="gridImage"
          src={this.props.value.imageUrl}
          alt="Not Found"
        />
        <h5>{this.props.value.title}</h5>
        <h6>{this.props.value.author}</h6>
      </div>
    );
  }
}
