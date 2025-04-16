// External modules
import { Element } from 'react-scroll';

// Internal modules
import AboutIntro from './AboutIntro';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import { AboutContainer } from '../../styles/aboutStyles';

import {
  techStackExp,
  techStackCourse,
  infinityDevCoreExperience,
  infinityDashboardExperience,
  educationItems,
} from './aboutInfo';

function About() {
  return (
    <AboutContainer>
      <Element name="about-section">
        <AboutIntro />

        <ExperienceSection
          devCoreExperience={infinityDevCoreExperience}
          dashboardExperience={infinityDashboardExperience}
          techStack={techStackExp}
        />

        <EducationSection
          educationItems={educationItems}
          techStack={techStackCourse}
        />
      </Element>
    </AboutContainer>
  );
}

export default About;
