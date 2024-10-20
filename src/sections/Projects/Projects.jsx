import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import joycon from '../../assets/depositphotos_391165526-stock-illustration-pixel-game-logo-design-vector.webp';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://greentechnology.com.np/"
          h3="GreenTechnology Pvt. Ltd."
          p="Portfolio App - Made Using: PHP, HTML, CSS & 
          Javascript" 
        />
        <ProjectCard
          src={joycon}
          link="https://shresthasameer.itch.io/jump-boi"
          h3="Jump_boi"
          p="2D platformer Game - Made using: GDscript"
        />
        
      </div>
    </section>
  );
}

export default Projects;
