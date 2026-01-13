import styles from './CertificatesStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import leetcodeLight from '../../assets/leetcode-light.svg';
import leetcodeDark from '../../assets/leetcode-dark.svg';
import codechefLight from '../../assets/codechef-light.svg';
import codechefDark from '../../assets/codechef-dark.svg';
import udemyImg from '../../assets/udemy.png';
import courseraImg from '../../assets/coursera.png';
import { useTheme } from '../../common/ThemeContext';
import { SOCIAL_LINKS, CERTIFICATE_LINKS } from '../../utils/constants';

function Certificates() {
    const { theme } = useTheme();
    const leetcodeIcon = theme === 'light' ? leetcodeLight : leetcodeDark;
    const codechefIcon = theme === 'light' ? codechefLight : codechefDark;

    return (
        <section id="certificates" className={styles.container}>
            <h1 className="sectionTitle">Profiles & Certificates</h1>

            <div className={styles.profilesContainer}>
                {/* LeetCode Stats Card */}
                <a href={SOCIAL_LINKS.LEETCODE} target="_blank" rel="noreferrer" className={styles.profileCard}>
                    <img
                        src="https://leetcard.jacoblin.cool/shishpal0666?theme=dark&font=Roboto%20Mono&ext=heatmap"
                        alt="LeetCode Stats"
                        className={styles.statsImage}
                    />
                </a>

                {/* CodeChef Card */}
                <a href={SOCIAL_LINKS.CODECHEF} target="_blank" rel="noreferrer" className={styles.profileCard}>
                    <div className={styles.codechefCard}>
                        <img src={codechefIcon} alt="CodeChef Logo" className={styles.mnIcon} />
                        <div className={styles.codechefInfo}>
                            <h3>CodeChef</h3>
                            <p>3★ Coder</p>
                            <p>Current Rating: 1634</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className={styles.certificatesContainer}>
                <ProjectCard
                    src={udemyImg}
                    link={CERTIFICATE_LINKS.UDEMY_WEB_DEV}
                    h3="Web Development"
                    p="Udemy Bootcamp"
                    gl={CERTIFICATE_LINKS.UDEMY_WEB_DEV}
                />
                <ProjectCard
                    src={courseraImg}
                    link={CERTIFICATE_LINKS.COURSERA_ML}
                    h3="Machine Learning"
                    p="Stanford Online"
                    gl={CERTIFICATE_LINKS.COURSERA_ML}
                />
            </div>
        </section>
    );
}

export default Certificates;
