import styles from './ProjectsStyles.module.css';
import DevStack from '../../assets/DevStack.png';
import ClassFlow from '../../assets/ClassFlow.png';
import MovieMate from '../../assets/MovieMate.png';
import Market from '../../assets/Market.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ClassFlow}
          link="https://class-flow.vercel.app/"
          h3="ClassFlow"
          p="Q&A Platform"
        />
        <ProjectCard
          src={DevStack}
          link="https://dev-stack-blog.vercel.app/"
          h3="DevStack"
          p="Blog platform"
        />
        <ProjectCard
          src={MovieMate}
          link="https://moviemate-krjn.onrender.com/"
          h3="MovieMate"
          p="Movie recommendation app"
        />
        <ProjectCard
          src={Market}
          link="#"
          h3="Market"
          p="E-commerce platform"
        />
      </div>
    </section>
  );
}

export default Projects;
