import styles from './SkillStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
  <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="Vue" />
        </div>
      <hr />
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
      <hr />
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Adobe Premiere" />
        <SkillList src={checkMarkIcon} skill="Vegas Pro" />
        <SkillList src={checkMarkIcon} skill="After Effects" />
        <SkillList src={checkMarkIcon} skill="CapCut" />
        <SkillList src={checkMarkIcon} skill="Da Vinci Resolve"/>
      </div>
    </section>
  );
}

export default Skills;