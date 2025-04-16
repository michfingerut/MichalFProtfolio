// External modules
import React from 'react';

// Internal modules
import { EducationCardContainer } from '../../styles/educationStyles';
import { TechStackWrapper } from '../../styles/educationStyles';
import { TechStack, TechItem } from '../../styles/techStackStyles';

const EducationItem = ({ degree, institution, period, techStack }) => {
  return (
    <EducationCardContainer>
      <h2>{degree}</h2>
      <p>
        <br />
        {institution}
        <br />
        {period}
      </p>

      <TechStackWrapper>
        <TechStack>
          {techStack?.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechStack>
      </TechStackWrapper>
    </EducationCardContainer>
  );
};

export default EducationItem;
