import React from "react";
import "./prompt.css";

export default function Prompt({text,handleContinue}) {

  return (
    <div className="prompt-container">
      <p>{text}</p>
      <button 
      className="prompt-button" 
      onClick={handleContinue}
      >Continue</button>
    </div>
  );
}
