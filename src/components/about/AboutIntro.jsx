// External modules
import React from 'react';

// Internal modules
import { AboutSecondaryContainer } from '../../styles/aboutStyles.js';
import personalImage from '../../assets/personal_pic.jpeg';

function AboutIntro() {
  return (
    <AboutSecondaryContainer>
      <div>
        <h1>About Me</h1>
        <p>
          Successfully transitioned from a career in optometry to software
          development, showcasing adaptability, a strong learning mindset, and a
          commitment to continuous growth.
        </p>
      </div>
      <img src={personalImage} alt="selfie" />
    </AboutSecondaryContainer>
  );
}

export default AboutIntro;
