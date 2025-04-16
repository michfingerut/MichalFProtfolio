import {
  ProjectsContainer,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechItem,
} from '../styles/styles';
import { ImageContainer } from '../styles/commonsStyles';
import knGroupPage from '../assets/kn_group_page.png';
import knEdit from '../assets/kn_edit.png';

function Projects() {
  const project = [
    {
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
        'Docker',
      ],
    },
    {
      name: 'Crypto Balance System',
      description:
        'A NestJS monorepo project with two microservices: a Rate Service that fetches and caches crypto rates from CoinGecko, and a Balance Service that calculates user balances based on transactions. ',
      techStack: [
        'Node.js',
        'TypeScript',
        'Nest.js',
        'Express',
        'Object oriented programming',
        'Jest',
        'Docker',
      ],
    },
  ];

  return (
    <ProjectsContainer>
      <div id="projects-section">
        <h1>Projects</h1>
        <ProjectCard>
          <ProjectContent>
            <ProjectTitle>{project[0].name}</ProjectTitle>
            <ProjectDescription>{project[0].description}</ProjectDescription>
            <TechStack>
              {project[0].techStack.map((tech, index) => (
                <TechItem key={index}>{tech}</TechItem>
              ))}
            </TechStack>
          </ProjectContent>
          <ImageContainer>
            <ProjectImage src={knGroupPage} alt="Project screenshot" />
            <ProjectImage src={knEdit} alt="Project screenshot" />
          </ImageContainer>
        </ProjectCard>

        <ProjectCard style={{ marginTop: '2em' }}>
          <ProjectContent>
            <ProjectTitle>{project[1].name}</ProjectTitle>
            <ProjectDescription>{project[1].description}</ProjectDescription>
            <TechStack>
              {project[1].techStack.map((tech, index) => (
                <TechItem key={index}>{tech}</TechItem>
              ))}
            </TechStack>
          </ProjectContent>
        </ProjectCard>
      </div>
    </ProjectsContainer>
  );
}

export default Projects;
