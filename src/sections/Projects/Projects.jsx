import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import tictactoe from '../../assets/tictactoe.png'
import scicalculator from '../../assets/scicalculator.png'
import hipsster from '../../assets/hipsster.png'
import multimediaprojects from '../../assets/multimediaprojects.png'

function Projects() {
  return (
     <section id="projects" className={styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>
        < ProjectCard src={tictactoe} link='https://tic-tac-toe-game-by-cjways.netlify.app/'
        h3="Tic Tac Toe"
        p="ReactJS Game"
        />
        < ProjectCard src={scicalculator} link='https://scientific-calculator-app-by-cjways.netlify.app/'
        h3="Scientific Calculator"
        p="Made with HTML, CSS, JavaScript"
        />
        < ProjectCard src={hipsster} link='https://github.com/CJways'
        h3="Hipsster"
        p="Glasses Shop"
        />
        < ProjectCard src={multimediaprojects} link='https://drive.google.com/drive/folders/1tEYVep1T3lcOiNpJjNAjX6k37QNSCMy8?usp=sharing'
        h3="Multimedia Projects"
        p="Graphics and Digital Creativity."
        />
    </div>
    </section>
  );
}

export default Projects
