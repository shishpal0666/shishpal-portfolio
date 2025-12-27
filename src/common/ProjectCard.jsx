import React from "react";

function ProjectCard({ src, link, h3, p, gl }) {

  return (
    <div className="project-card-container" style={{ width: "fit-content", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="hover" src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
      <a href={gl} target="_blank" rel="noopener noreferrer">
        <h3>
          Source Code ↗️
        </h3>
      </a>
    </div>
  );
}

export default ProjectCard;
