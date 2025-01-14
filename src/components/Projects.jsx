import {
  ProjectsContainer,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechItem,
  ImageContainer,
} from '../styles/styles';
import knGroupPage from '../assets/kn_group_page.png';
import knEdit from '../assets/kn_edit.png';

function Projects() {
  const project = {
    name: 'Keeper Notes',
    description:
      'KeeperNotes is a web app for managing personal notes, groups, and members. It enables users to create, edit, and delete notes, manage group memberships, and collaborate seamlessly. ',
    techStack: [
      'React',
      'Node.js',
      'JavaScript',
      'Express',
      'Sequelize',
      'Material UI',
      'axios',
      'styled components',
      'Jest',
      'PostgreSQL',
    ],
  };

  return (
    <ProjectsContainer>
      <div id="projects-section">
        <h1>Projects</h1>
        <ProjectCard>
          <ProjectContent>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.techStack.map((tech, index) => (
                <TechItem key={index}>{tech}</TechItem>
              ))}
            </TechStack>
          </ProjectContent>
          <ImageContainer>
            <ProjectImage src={knGroupPage} alt="Project screenshot" />
            <ProjectImage src={knEdit} alt="Project screenshot" />
          </ImageContainer>
        </ProjectCard>
      </div>
    </ProjectsContainer>
  );
}

export default Projects;
