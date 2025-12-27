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
import { PROJECT_LINKS } from '../../utils/constants';

function Projects() {

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ClassFlow}
          link={PROJECT_LINKS.CLASS_FLOW.DEMO}
          h3="ClassFlow"
          p="Q&A Platform"
          gl={PROJECT_LINKS.CLASS_FLOW.REPO}
        />
        <ProjectCard
          src={DevStack}
          link={PROJECT_LINKS.DEV_STACK.DEMO}
          h3="DevStack"
          p="Blog platform"
          gl={PROJECT_LINKS.DEV_STACK.REPO}
        />
        <ProjectCard
          src={MovieMate}
          link={PROJECT_LINKS.MOVIE_MATE.DEMO}
          h3="MovieMate"
          p="Movie recommendation app"
          gl={PROJECT_LINKS.MOVIE_MATE.REPO}
        />
        <ProjectCard
          src={Market}
          link={PROJECT_LINKS.MARKET.DEMO}
          h3="Market"
          p="E-commerce platform"
          gl={PROJECT_LINKS.MARKET.REPO}
        />

        <ProjectCard
          src={EcommerceApp}
          link={PROJECT_LINKS.ECOMMERCE.DEMO}
          h3="E-commerce-App"
          p="E-commerce platform"
          gl={PROJECT_LINKS.ECOMMERCE.REPO}
        />
        <ProjectCard
          src={DestinationAlert}
          link={PROJECT_LINKS.DESTINATION_ALERT.DEMO}
          h3="Destination-Alert"
          p="Destination-Alert System"
          gl={PROJECT_LINKS.DESTINATION_ALERT.REPO}
        />
        <ProjectCard
          src={Stopwatch}
          link={PROJECT_LINKS.STOPWATCH.DEMO}
          h3="Stopwatch"
          p="Stopwatch Application"
          gl={PROJECT_LINKS.STOPWATCH.REPO}
        />
        <ProjectCard
          src={StockManagement}
          link={PROJECT_LINKS.STOCK_MANAGEMENT.DEMO}
          h3="StockManagement"
          p="Stock Management System"
          gl={PROJECT_LINKS.STOCK_MANAGEMENT.REPO}
        />
      </div>
    </section>
  );
}

export default Projects;
