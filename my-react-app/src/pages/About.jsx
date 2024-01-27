import React from "react";
import "./About.css";

export default function About() {
  const h1Style = {
    textAlign: "center",
    fontWeight: "bold",
  };

  const h2Style = {
    textAlign: "center",
    fontWeight: "bold",
  }

  return (
    <>
    <div className="card-container">
      <div className="card">
        <img
          src="https://i.stack.imgur.com/1ruFA.jpg?s=256&g=1"
          className="card-image"
          alt="profile-pic"
        />
        <h1>Chakraless</h1>
        <h3>Future Front-End Web Developer</h3>

        {/* Social links section */}
        <div className="social-links">
          {/* GitHub link */}
          <a
            href="https://github.com/Chakraless"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="src\assets\github-logo.png" alt="GitHub" />
          </a>

          {/* Discord link */}
          <a
            href="https://discordapp.com/users/853613812313620481"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="src\assets\discord.png" alt="Discord" />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://discordapp.com/users/853613812313620481"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" alt="Discord" />
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
      
    </div>
    <div className="language-container">
      <div className="languages">
      <h2 style={h2Style}>My Languages</h2>
      <p></p>

      <div className="image-container">
        <img className="image"></img>
      </div>
      </div>
    </div>
  </>
  );
}
