// External modules
import React from 'react';

const EducationItem = ({ degree, institution, period }) => {
  return (
    <p>
      {degree}
      <br />
      {institution}
      <br />
      {period}
    </p>
  );
};

export default EducationItem;
