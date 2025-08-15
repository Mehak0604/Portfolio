import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
<section id="projects" className="projects-section">
  <h2>Projects</h2>
  <div className="project-grid">
    <div className="project-card">
      <h3>School Website Clone</h3>
      <p>
        Developed a responsive and visually accurate clone of a school website using HTML5 and CSS3, focusing on layout design,
        styling, and cross-browser compatibility.
      </p>
      <p><strong>Tech:</strong> HTML5, CSS3</p>
      <a href="https://mehak0604.github.io/My-School/" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>

    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>
        Designed and built a personal online portfolio to present my skills, projects, and contact information in a clean,
        content-focused layout.
      </p>
      <p><strong>Tech:</strong> HTML5,CSS3,JavaScript,React</p>
      <a href="https://mehak0604.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>

    <div className="project-card">
      <h3>Ride-Sharing Application</h3>
      <p>
        Created a console-based C++ application to simulate ride-sharing matchmaking, using Data Structures & Algorithms to
        efficiently pair users and drivers.
      </p>
      <p><strong>Tech:</strong> C++, DSA</p>
    </div>
  </div>
</section>

  );
}
