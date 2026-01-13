import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ src, link, h3, p, gl }) {

  return (
    <div className={styles.cardContainer}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="hover" src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
      <a href={gl} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
        Source Code ↗️
      </a>
    </div>
  );
}

export default ProjectCard;
