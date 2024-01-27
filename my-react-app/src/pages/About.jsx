import React from "react";
import './About.css';

export default function About() {
  const h1Style = {
    textAlign: "center",
    // Add any other styles you need
  };

  return (
    <div>
      <h1 style={h1Style}>About Me</h1>
      <div className="card">
        <img src="https://i.stack.imgur.com/1ruFA.jpg?s=256&g=1" className="card-image" alt="profile-pic" />
        <h2>Chakraless</h2>
        <p>Future Front-End Web Developer</p>
        
        {/* Social links section */}
        <div className="social-links">
          {/* GitHub link */}
          <a href="https://github.com/Chakraless" target="_blank" rel="noopener noreferrer">
            <img src="src\assets\github-logo.png" alt="GitHub" />
          </a>
          
          {/* Discord link */}
          <a href="https://discordapp.com/users/853613812313620481" target="_blank" rel="noopener noreferrer">
            <img src="src\assets\discord.png" alt="Discord" />
          </a>
          
          {/* Add more social links as needed */}
        </div>
      </div>
    </div>
  );
}
