// External modules
import { Element } from 'react-scroll';

// Internal modules
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import { AboutContainer } from '../../styles/aboutStyles';
import { techStackCourse, infinityExp, educationItems } from './aboutInfo';

function About() {
  return (
    <AboutContainer>
      <Element name="experience-section">
        <ExperienceSection experience={infinityExp} />
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
