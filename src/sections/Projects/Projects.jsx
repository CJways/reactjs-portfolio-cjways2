import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import waterBottle from '../../assets/drinking-bottle.png'
import smartWatch from '../../assets/smart-watch.png'
import kitchenwareBanner from '../../assets/kitchenware-banner.png'
import earpods from '../../assets/earpods.png'
import multimediaprojects from '../../assets/multimediaprojects.png';

import video1 from '../../assets/perfumeShowcase.mp4'
import video2 from '../../assets/shirtPromo.mp4'
import video3 from '../../assets/story.mp4'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Short-Form Videos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={video1}
          type="video"
          h3="Luxury Perfume Product Showcase – Social Media Video Ad"
          p="15–20s vertical format • Engagement-focused • Subtitles • Music-driven pacing"
        />
        <ProjectCard
          src={video2}
          type="video"
          h3="Modern Shirt Promo Ad – Short-Form Social Media Commercial"
          p="“Branded visuals • Fast pacing • Strong CTA”"
        />
        <ProjectCard
          src={video3}
          type="video"
          h3="Storytelling / Transformation – Sample Project"
          p="Story arc • engagement • pacing • subtitles • music"
        />
      </div>

      <h1 className="sectionTitle">Canva Design Samples</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={waterBottle}
          link="https://drive.google.com/file/d/1mRMyLsUvOjIGnpaFL0nqIu6hagyTvXmO/view?usp=sharing"
          type="image"
          h3="Drinking Bottle Product Showcase – Social Media Post"
          p="Sleek. Durable. Always with you"
        />
        <ProjectCard
          src={smartWatch}
          link="https://drive.google.com/file/d/1LOYBgvwvXT52WdPG7tg85InzodB1SYvM/view?usp=sharing"
          type="image"
          h3="Smart Watch Product Ad – Social Media Graphic"
          p="Upgrade your wrist game today"
        />
        <ProjectCard
          src={kitchenwareBanner}
          link="https://drive.google.com/file/d/17AhyjxauVnUSfAy9wPQCIFoXDYweVL_f/view?usp=sharing"
          type="image"
          h3="Kitchenware Banner Design – Sample Project"
          p="Showcasing kitchen essentials with style."
        />
        <ProjectCard
          src={earpods}
          
          type="image"
          link="https://drive.google.com/file/d/1qkN5RBVpyIX2IMzd6kvVDnDhQM4jOeFg/view?usp=sharing"
          h3="EarPods Story Template – Engagement-Focused"
          p="Tap to experience premium sound."
        />
      </div>
      <div className={styles.projectsContainer}>
          <ProjectCard
          src={multimediaprojects}
          link="https://drive.google.com/drive/folders/1tEYVep1T3lcOiNpJjNAjX6k37QNSCMy8?usp=sharing"
          type="image"
          h3="Multimedia Projects"
          p="Graphics and digital creative projects"
        />
      </div>
    </section>
  );
}

export default Projects;
