import React from "react";

function ProjectCard({ src, link, h3, p, gl }) {

  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <a href={gl} target="_blank">
        <h3>
        Source Code ↗️
        </h3>
      </a>
    </a>
  );
}

export default ProjectCard;
