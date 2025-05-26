import styles from "./ProjectsStyles.module.css";
import viberr from "../../../assets/assets/rocket.jpeg";
import freshCoffee from "../../../assets/assets/coffee.png";
import Chair from "../../../assets/assets/chair.png";
import Green from "../../../assets/assets/hero2.png"
import ProjectCard from "../../../common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Syed-Sayem/Space_Website"
          h3="Space Website"
          p="ALT_34"
        />
        <ProjectCard
          src={freshCoffee}
          link="https://github.com/Syed-Sayem/Coffee"
          h3="Fresh Coffee"
          p="The Cozy Corner"
        />
        <ProjectCard
          src={Chair}
          link="https://github.com/Syed-Sayem/Chair_Project_BY-HTML_CSS/tree/main"
          h3="Accent Chair"
          p="Urban Ladder"
        />
        <ProjectCard
          src={Green}
          link="https://github.com/Syed-Sayem/Green_gradien_Project/tree/master"
          h3="Green Guardian"
          p="Environment Care"
        />
      </div>
    </section>
  );
};

export default Projects;
