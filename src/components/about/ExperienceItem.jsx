// External modules
import React from 'react';

const ExperienceItem = ({ title, company, period, descriptions }) => {
  return (
    <div>
      <p>
        {company}
        <br />
        <b>{title}</b>
        <br />
        {period}
        <br />
        {descriptions.map((desc, index) => (
          <span
            key={index}
            style={{
              display: 'block',
              marginTop: index === 0 ? '10px' : '0',
              marginBottom: '5px',
            }}
          >
            • {desc}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ExperienceItem;
