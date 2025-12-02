import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import scicalculator from '../../assets/scicalculator.png';
import hipsster from '../../assets/hipsster.png';
import multimediaprojects from '../../assets/multimediaprojects.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Short-Form Videos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="/vid1.mp4"
          type="video"
          h3="Tic Tac Toe"
          p="ReactJS Game"
        />
        <ProjectCard
          src={scicalculator}
          link="https://scientific-calculator-app-by-cjways.netlify.app/"
          type="image"
          h3="Scientific Calculator"
          p="Made with HTML, CSS, JavaScript"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/CJways"
          type="image"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={multimediaprojects}
          link="https://drive.google.com/drive/folders/1tEYVep1T3lcOiNpJjNAjX6k37QNSCMy8?usp=sharing"
          type="image"
          h3="Multimedia Projects"
          p="Graphics and Digital Creativity."
        />
      </div>
    </section>
  );
}

export default Projects;
