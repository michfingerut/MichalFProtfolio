// External modules
import { Element } from 'react-scroll';

// Internal modules
import { ProjectsContainer } from '../../styles/projectsStyles';
import ProjectCard from './ProjectCard';
import { projects } from './projectsInfo';

function Projects() {
  return (
    <Element id="projects-section">
      <ProjectsContainer>
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsContainer>
    </Element>
  );
}

export default Projects;
