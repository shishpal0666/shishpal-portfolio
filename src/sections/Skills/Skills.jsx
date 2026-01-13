import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  // Skillicons uses 'light' or 'dark'.
  // If my theme is 'light', I likely want 'light' icons, or maybe colorful ones?
  // Skillicons default is colorful. Let's force it to match theme or just be "per line" if needed.
  // Actually, skillicons standard icons look good on both usually, but let's strictly follow "theme" param if it improves visibility.
  // Actually, for skillicons, 'light' theme usually has dark text/ outlines, 'dark' theme has light text.
  // Let's pass the theme param.

  const iconTheme = theme === 'light' ? 'light' : 'dark';
  const getIcon = (name) => `https://skillicons.dev/icons?i=${name}&theme=${iconTheme}`;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.skillList}>
        <SkillList skill="C++" src={getIcon('cpp')} />
        <SkillList skill="JavaScript" src={getIcon('js')} />
        <SkillList skill="Python" src={getIcon('py')} />
        <SkillList skill="JAVA" src={getIcon('java')} />
        <SkillList skill="SQL" src={getIcon('mysql')} />
      </div>

      <hr />

      <div className={styles.skillList}>
        <SkillList skill="HTML" src={getIcon('html')} />
        <SkillList skill="CSS" src={getIcon('css')} />
        <SkillList skill="React.js" src={getIcon('react')} />
        <SkillList skill="Tailwind CSS" src={getIcon('tailwind')} />
        <SkillList skill="Bootstrap" src={getIcon('bootstrap')} />
        <SkillList skill="Redux" src={getIcon('redux')} />
      </div>

      <hr />

      <div className={styles.skillList}>
        <SkillList skill="Node.js" src={getIcon('nodejs')} />
        <SkillList skill="Express.js" src={getIcon('express')} />
        <SkillList skill="Flask" src={getIcon('flask')} />
        <SkillList skill="RESTful APIs" />
        <SkillList skill="Flask-WTF" />
      </div>

      <hr />

      <div className={styles.skillList}>
        <SkillList skill="MongoDB" src={getIcon('mongodb')} />
        <SkillList skill="PostgreSQL" src={getIcon('postgres')} />
        <SkillList skill="Socket.IO" />
      </div>

      <hr />

      <div className={styles.skillList}>
        <SkillList skill="Python" src={getIcon('py')} />
        <SkillList skill="Scikit-learn" src={getIcon('sklearn')} />
        <SkillList skill="TF-IDF" />
        <SkillList skill="Nearest Neighbors" />
        <SkillList skill="Supervised Learning" />
      </div>


      <hr />

      <div className={styles.skillList}>
        <SkillList skill="Git" src={getIcon('git')} />
        <SkillList skill="GitHub" src={getIcon('github')} />
        <SkillList skill="Postman" src={getIcon('postman')} />
        <SkillList skill="VS Code" src={getIcon('vscode')} />
      </div>
    </section>
  );
}

export default Skills;
