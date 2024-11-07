import React, { useState } from 'react';
import {
  ProjectsContainer,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechItem,
  CarouselContainer,
  CarouselImage,
  FullscreenModal,
  FullscreenImageContainer,
  FullscreenArrowButton,
} from '../styles/styles';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import knEdit from '../assets/kn_edit.png';
import knGroupPage from '../assets/kn_group_page.png';
import knLogin from '../assets/kn_login.png';
import knMain from '../assets/kn_main.png';

function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const project = {
    name: 'Keeper Notes',
    description:
      "KeeperNotes is a comprehensive web application designed to help users efficiently manage personal notes, groups, and members. With powerful features for organizing, collaborating, and sharing, it allows users to create, edit, and delete notes, while seamlessly managing group memberships. Whether you're working solo or collaborating with a team, KeeperNotes offers an intuitive interface to keep your notes and groups organized, ensuring easy access and collaboration for all.",
    techStack: [
      'React',
      'Node.js',
      'JavaScript',
      'Express',
      'Material UI',
      'styled components',
      'Jest',
      'PostgreSQL',
    ],
    images: [knEdit, knGroupPage, knLogin, knMain],
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length,
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length,
    );
  };

  const handleImageClick = () => {
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
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
          <CarouselContainer>
            <ProjectImage
              src={project.images[currentImageIndex]}
              alt="Project screenshot"
              onClick={handleImageClick}
            />
          </CarouselContainer>
        </ProjectCard>

        {isFullscreen && (
          <FullscreenModal>
            <FullscreenImageContainer>
              <FullscreenArrowButton onClick={handlePrevImage}>
                <ArrowBack />
              </FullscreenArrowButton>
              <CarouselImage
                src={project.images[currentImageIndex]}
                alt="Fullscreen project screenshot"
              />
              <FullscreenArrowButton onClick={handleNextImage}>
                <ArrowForward />
              </FullscreenArrowButton>
            </FullscreenImageContainer>
            <button onClick={handleCloseFullscreen}>Close</button>
          </FullscreenModal>
        )}
      </div>
    </ProjectsContainer>
  );
}

export default Projects;
