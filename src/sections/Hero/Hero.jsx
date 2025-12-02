import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-profile.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instaLight from '../../assets/insta-light.svg'
import instaDark from '../../assets/insta-dark.svg'
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv-2025.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon; 
  const instaIcon = theme === 'light' ? instaLight : instaDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark; 
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark; 

  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
     <img className={styles.hero}
     src={heroImg} 
     alt="Profile Picture of Christian James"
     />
     <img className={styles.colorMode}
     src={themeIcon} 
     alt="Color mode icon" 
     onClick={toggleTheme}
     />
     </div>
     <div className={styles.info}>
        <h1>Christian <br /> James</h1>
        <h2>Video Editor & Canva Creator | <br/>Short-Form Videos & Branded Visuals</h2>
        <span>
            <a href="https://www.instagram.com/cjwayyyys/" target="_blank">
            <img src={instaIcon} alt="Instagram Icon" />
            </a>
            <a href="https://github.com/CJways" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/christian-james-narag-2b1b62103/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
        </span>
        <p className={styles.description}>
          “Creating clean, engaging, and conversion-focused content for social media”</p>  
            <a href={CV} download>
            <button className="hover">Download Resume</button>
        </a>
     </div>
  </section>
}

export default Hero