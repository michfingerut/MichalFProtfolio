// External modules
import { Element } from 'react-scroll';

// Internal modules
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
      <Element name="experience-section">
        <ExperienceSection
          devCoreExperience={infinityDevCoreExperience}
          dashboardExperience={infinityDashboardExperience}
          techStack={techStackExp}
        />
      </Element>

      <Element name="education-section">
        <EducationSection
          educationItems={educationItems}
          techStack={techStackCourse}
        />
      </Element>
    </AboutContainer>
  );
}
export default About;
