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
import GoUpButton from './GoUpButton';

function Projects() {
  const project = {
    name: 'Keeper Notes',
    description:
      "KeeperNotes is a comprehensive web application designed to help users efficiently manage personal notes, groups, and members. With powerful features for organizing, collaborating, and sharing, it allows users to create, edit, and delete notes, while seamlessly managing group memberships. Whether you're working solo or collaborating with a team, KeeperNotes offers an intuitive interface to keep your notes and groups organized, ensuring easy access and collaboration for all.",
    techStack: [
      'React',
      'Node.js',
      'JavaScript',
      'Express',
      'Sequelize',
      'Material UI',
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
      </div>{' '}
      <GoUpButton />
    </ProjectsContainer>
  );
}

export default Projects;
