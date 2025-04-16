// External modules
import React from 'react';

// Internal modules
import { AboutSecondaryContainer } from '../../styles/aboutStyles';
import ExperienceItem from './ExperienceItem';
import { TechStack, TechItem } from '../../styles/techStackStyles';

function ExperienceSection({ experience }) {
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
        {experience.map((exp, index) => {
          return (
            <div key={index}>
              <ExperienceItem {...exp} />
              <TechStack>
                {exp.techStack.map((tech, index) => (
                  <TechItem key={index + tech}>{tech}</TechItem>
                ))}
              </TechStack>
            </div>
          );
        })}
      </div>
    </AboutSecondaryContainer>
  );
}

export default ExperienceSection;
