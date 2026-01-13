import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import { projects } from '../../utils/projects';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.image}
            link={project.demoLink}
            h3={project.title}
            p={project.description}
            gl={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
