// External modules
import { Element } from 'react-scroll';

// Internal modules
import { ProjectsContainer } from '../../styles/projectsStyles';
import ProjectCard from './ProjectCard';
import { projects } from './projectsInfo';

function Projects() {
  return (
    <ProjectsContainer>
      <Element id="projects-section">
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Element>
    </ProjectsContainer>
  );
}

export default Projects;
