// External modules
import { Element } from 'react-scroll';
import React from 'react';

// Eternal modules
import { educationItems } from './educationInfo';
import { EducationContainer } from '../../styles/educationStyles';
import EducationItem from './EducationItem';

function Education() {
  return (
    <Element name="education-section" id="education-section">
      <EducationContainer>
        <h1>Education</h1>
        {educationItems.map((item, index) => (
          <React.Fragment key={index}>
            <EducationItem {...item} />
            {index < educationItems.length - 1 && <br />}
          </React.Fragment>
        ))}
      </EducationContainer>
    </Element>
  );
}

export default Education;
