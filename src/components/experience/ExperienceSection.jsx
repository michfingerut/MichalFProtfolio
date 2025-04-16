// External modules
import React from 'react';

// Internal modules
import { ExpCardContainer } from '../../styles/expStyles';
import ExperienceItem from './ExperienceItem';
import { TechStack, TechItem } from '../../styles/techStackStyles';

function ExperienceSection({ experience }) {
  return (
    <>
      {experience.map((exp, index) => {
        return (
          <ExpCardContainer key={index} style={{ marginBottom: '40px' }}>
            <ExperienceItem {...exp} />
            <TechStack>
              {exp.techStack.map((tech, index) => (
                <TechItem key={index + tech}>{tech}</TechItem>
              ))}
            </TechStack>
          </ExpCardContainer>
        );
      })}
    </>
  );
}

export default ExperienceSection;
