// External modules
import React from 'react';

// Internal modules
import {
  ProjectContentContainer,
  ProjectTitle,
  ProjectDescription,
} from '../../styles/projectsStyles';
import { TechStack, TechItem } from '../../styles/techStackStyles';

function ProjectContent({ project }) {
  return (
    <ProjectContentContainer>
      <ProjectTitle>{project.name}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <TechStack>
        {project.techStack.map((tech, idx) => (
          <TechItem key={idx}>{tech}</TechItem>
        ))}
      </TechStack>
      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      )}
    </ProjectContentContainer>
  );
}

export default ProjectContent;
