// External modules
import React, { useContext } from 'react';

// Internal modules
import { ThemeContext } from '../../context/ThemeContext';

const ExperienceItem = ({ title, company, period, descriptions }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <p>
        {company}
        <br />
        <b style={{ color: theme.primaryText }}>{title}</b>
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
