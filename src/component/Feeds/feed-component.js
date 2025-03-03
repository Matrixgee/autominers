import React from "react";
import "./feed-component.css";

export default function FeedsComponent({img, headerText, textContent, time}) {
  return (
    <div className="feed-component_container">
      <div className="image-container">
        <img src={img} alt="feeds" />
      </div>
      <div>
        <h2>{headerText}</h2>
        <p>{textContent}</p>
        <p>{time}</p>
      </div>
    </div>
  );
}
