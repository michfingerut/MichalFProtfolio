// External modules
import React from 'react';

// Internal modules
import { ImageContainer } from '../../styles/commonsStyles';
import { ProjectImage } from '../../styles/projectsStyles';

function ProjectImages({ images }) {
  return (
    <ImageContainer>
      {images.map((image, idx) => (
        <ProjectImage key={idx} src={image} alt="Project screenshot" />
      ))}
    </ImageContainer>
  );
}

export default ProjectImages;
