// External modules
import React from 'react';

// Internal modules
import { AboutSecondaryContainer } from '../../styles/aboutStyles';
import ExperienceItem from './ExperienceItem';
import { TechStack, TechItem } from '../../styles/techStackStyles';

function ExperienceSection({
  devCoreExperience,
  dashboardExperience,
  techStack,
}) {
  return (
    <AboutSecondaryContainer
      style={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div>
        <h1>Experience</h1>
        <ExperienceItem {...devCoreExperience} />
        <br />
        <ExperienceItem {...dashboardExperience} />
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <TechStack>
          {techStack.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechStack>
      </div>
    </AboutSecondaryContainer>
  );
}

export default ExperienceSection;
