import React from "react";

function List(props) {
  const images = props.images.map(image => (
    <div key={image.url}>
      <h3>{image.title}</h3>
      <img src={image.url} alt={image.title} />
    </div>
  ));
  return <div>{images}</div>;
}

export default List;
