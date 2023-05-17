import React from "react";

function Card({image, text}) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={text} />
      <div className="card-body">
        <h5 className="card-title">{text}</h5>
      </div>
    </div>
  );
}

export default Card;
