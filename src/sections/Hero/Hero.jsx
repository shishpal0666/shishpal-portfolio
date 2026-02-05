import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/shishpal.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import leetcodeLight from "../../assets/leetcode-light.svg";
import leetcodeDark from "../../assets/leetcode-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import { SOCIAL_LINKS, RESUME_LINK } from "../../utils/constants";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const leetcodeIcon = theme === "light" ? leetcodeLight : leetcodeDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          draggable="false"
          alt="Profile picture of Shishpal Polampally"
        />
      </div>
      <div className={`${styles.info} fade-in`}>
        <h1>
          Shishpal
          <br />
          Polampally
        </h1>
        {/* <h2>Full Stack Developer</h2> */}
        <span>
          <a href={SOCIAL_LINKS.GITHUB} target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href={SOCIAL_LINKS.LEETCODE} target="_blank">
            <img src={leetcodeIcon} alt="Leetcode icon" />
          </a>
        </span>


        <p className={styles.description}>
          I'm a final year Computer Science student at IIIT Pune with a strong
          foundation in Web Development and Machine Learning. Achived 4 ⭐ in CodeChef.
        </p>


        <hr />

        <div className={styles.infoContainer}>
          <a href="mailto:shishpalpolampally@gmail.com">
            <p>Email: shishpalpolampally@gmail.com</p>
          </a>
          <a href="tel:+919100283901">
            <p>Mobile: +91 91002 83901</p>
          </a>
        </div>
        {/* <a href={SHISHPAL_RESUME} download>
          <button className="hover">Resume</button>
        </a> */}
        <a
          href={RESUME_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hover">Resume ↗️</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
