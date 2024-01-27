import React from "react";
import './About.css'
export default function About() {
  const h1Style = {
    textAlign: "center",
    // Add any other styles you need
  };

  return (
    <div>
      <h1 style={h1Style}>About Me</h1>
      <div classname="card">
        <img src="https://i.stack.imgur.com/1ruFA.jpg?s=256&g=1"></img>
        <h2>Chakraless</h2>
        <p>I like to code</p>
      </div>
    </div>
  );
}
