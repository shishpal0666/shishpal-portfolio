import styles from './ProjectsStyles.module.css';
import DevStack from '../../assets/DevStack.png';
import ClassFlow from '../../assets/ClassFlow.png';
import MovieMate from '../../assets/MovieMate.png';
import Market from '../../assets/Market.png';
import EcommerceApp from '../../assets/Ecommerce.png';
import StockManagement from '../../assets/StockManagement.png';
import Stopwatch from '../../assets/Stopwatch.png';
import DestinationAlert from '../../assets/DestinationAlert.png';
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
          gl="https://github.com/shishpal0666/ClassFlow"
        />
        <ProjectCard
          src={DevStack}
          link="https://dev-stack-blog.vercel.app/"
          h3="DevStack"
          p="Blog platform"
          gl="https://github.com/shishpal0666/DevStack"
        />
        <ProjectCard
          src={MovieMate}
          link="https://moviemate-krjn.onrender.com/"
          h3="MovieMate"
          p="Movie recommendation app"
          gl="https://github.com/shishpal0666/MovieMate"
        />
        <ProjectCard
          src={Market}
          link="https://github.com/shishpal0666/Market"
          h3="Market"
          p="E-commerce platform"
          gl="https://github.com/shishpal0666/Market"
        />

        <ProjectCard
          src={EcommerceApp}
          link="https://e-commerce-app-seven-rho.vercel.app/"
          h3="E-commerce-App"
          p="E-commerce platform"
          gl="https://github.com/shishpal0666/E-commerce-App"
        />
        <ProjectCard
          src={DestinationAlert}
          link="https://destination-alert.onrender.com/"
          h3="Destination-Alert"
          p="Destination-Alert System"
          gl="https://github.com/shishpal0666/Destination-Alert"
        />
        <ProjectCard
          src={Stopwatch}
          link="https://stopwatch-shishpal.pages.dev/"
          h3="Stopwatch"
          p="Stopwatch Application"
          gl="https://github.com/shishpal0666/stopwatch"
        />
        <ProjectCard
          src={StockManagement}
          link="https://github.com/shishpal0666/StockManagement"
          h3="StockManagement"
          p="Stock Management System"
          gl="https://github.com/shishpal0666/StockManagement"
        />
      </div>
    </section>
  );
}

export default Projects;
