// External modules
import React from 'react';

// Internal modules
import { AboutSecondaryContainer } from '../../styles/aboutStyles';
import EducationItem from './EducationItem';
import { TechStack, TechItem } from '../../styles/techStackStyles';

function EducationSection({ educationItems, techStack }) {
  return (
    <AboutSecondaryContainer
      style={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div style={{ width: '45%' }}>
        <h1>Education</h1>
        {educationItems.map((item, index) => (
          <React.Fragment key={index}>
            <EducationItem {...item} />
            {index < educationItems.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
      <div style={{ width: '45%' }}>
        <TechStack>
          {techStack.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechStack>
      </div>
    </AboutSecondaryContainer>
  );
}

export default EducationSection;
