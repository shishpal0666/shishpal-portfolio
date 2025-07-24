import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/shishpal.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import SHISHPAL_SDE from "../../assets/SHISHPAL_SDE.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Shishpal Polampally"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Shishpal
          <br />
          Polampally
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://github.com/shishpal0666" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/shishpal-polampally/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://x.com/shishpal_0666" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
        </span>

        <p className={styles.description}>
          I'm a final year Computer Science student at IIIT Pune with a strong
          foundation in full-stack development and machine learning.
        </p>

        <div className={styles.infoContainer}>
          <a href="mailto:shishpalpolampally@gmail.com" ><p>Email: shishpalpolampally@gmail.com</p></a>
          <a href="tel:+919100283901"><p>Mobile: +91 91002 83901</p></a>
        </div>
        <a href={SHISHPAL_SDE} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
