import styles from './SkillStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      
      {/* FIRST SKILL GROUP */}
      <h1 className="sectionTitle">Editing Tools</h1>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Canva" />
        <SkillList src={checkMarkIcon} skill="Photoshop" />
        <SkillList src={checkMarkIcon} skill="Premiere" />
        <SkillList src={checkMarkIcon} skill="Vegas Pro" />
        <SkillList src={checkMarkIcon} skill="AI tools" />
        <SkillList src={checkMarkIcon} skill="After Effects" />
        <SkillList src={checkMarkIcon} skill="CapCut" />
        <SkillList src={checkMarkIcon} skill="Da Vinci Resolve" />
      </div>
    </section>
  );
}

export default Skills;
