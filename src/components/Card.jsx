import React from "react";
import ImageCircle from "./image/ImageCircle.jsx";
import Detail from "./Detail.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <ImageCircle image={props.image} />
      </div>
      <div className="bottom">
        <Detail phone={props.email} email={props.phone} />
      </div>
    </div>
  );
}

export default Card;
