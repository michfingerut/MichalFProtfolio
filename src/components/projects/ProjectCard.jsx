// External modules
import React from 'react';

// Internal modules
import ProjectContent from './ProjectContent';
import ProjectImages from './ProjectImages';
import { ProjectCardContainer } from '../../styles/styles';

function ProjectCard({ project }) {
  return (
    <ProjectCardContainer>
      <ProjectContent project={project} />
      {project.images && <ProjectImages images={project.images} />}
    </ProjectCardContainer>
  );
}

export default ProjectCard;
