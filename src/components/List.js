import React, { Component } from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer.js";

export default class List extends Component {
  render() {
    const images = this.props.images.map(image => (
      <div key={image.url}>
        <h3>{image.title}</h3>
        <img src={image.url} alt={image.title} />
      </div>
    ));

    const form = this.props.user ? (
      <CreateFormContainer />
    ) : (
      <LoginFormContainer />
    );

    return (
      <div>
        {form}
        {images}
      </div>
    );
  }
}
