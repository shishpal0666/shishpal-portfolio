import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";

function Skills() {

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      {/* Languages */}
      <div className={styles.skillList}>
        <SkillList skill="C++" />
        <SkillList skill="JavaScript" />
        <SkillList skill="Python" />
        <SkillList skill="JAVA" />
        <SkillList skill="SQL" />
      </div>

      <hr />

      {/* Frontend */}
      <div className={styles.skillList}>
        <SkillList skill="HTML" />
        <SkillList skill="CSS" />
        <SkillList skill="React.js" />
        <SkillList skill="Tailwind CSS" />
        <SkillList skill="Bootstrap" />
        <SkillList skill="Redux" />
      </div>

      <hr />

      {/* Backend */}
      <div className={styles.skillList}>
        <SkillList skill="Node.js" />
        <SkillList skill="Express.js" />
        <SkillList skill="Flask" />
        <SkillList skill="RESTful APIs" />
        <SkillList skill="Flask-WTF" />
      </div>

      <hr />

      {/* Databases & Cloud */}
      <div className={styles.skillList}>
        <SkillList skill="MongoDB" />
        <SkillList skill="PostgreSQL" />
        <SkillList skill="Socket.IO" />
      </div>

      <hr />

      {/* AI / Machine Learning */}
      <div className={styles.skillList}>
        <SkillList skill="Python" />
        <SkillList skill="Scikit-learn" />
        <SkillList skill="TF-IDF" />
        <SkillList skill="Nearest Neighbors" />
        <SkillList skill="Supervised Learning" />
      </div>

      <hr />

      {/* Tools */}
      <div className={styles.skillList}>
        <SkillList skill="Git" />
        <SkillList skill="GitHub" />
        <SkillList skill="Postman" />
        <SkillList skill="VS Code" />
      </div>
    </section>
  );
}

export default Skills;
