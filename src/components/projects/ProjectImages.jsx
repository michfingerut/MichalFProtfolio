// External modules
import React from 'react';

// Internal modules
import { ImageContainer } from '../../styles/commonsStyles';
import { ProjectImage } from '../../styles/projectsStyles';

//TODO: consider do it in a carosele
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
