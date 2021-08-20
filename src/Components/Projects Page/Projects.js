import Project from "./Project";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <Project id="project1" name="Project1" />
      <Project id="project2" name="Project2" dark={true} />
      <Project id="project3" name="Project3" />
    </section>
  );
}

export default Projects;
