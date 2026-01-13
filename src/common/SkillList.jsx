import styles from './SkillList.module.css';

function SkillList({ skill, src }) {
  return (
    <div className={styles.skillContainer}>
      {src ? <img src={src} alt={`${skill} logo`} className={styles.icon} /> : null}
      <p>{skill}</p>
    </div>
  );
}

export default SkillList;
