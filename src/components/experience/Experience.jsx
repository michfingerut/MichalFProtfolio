// External modules
import { Element } from 'react-scroll';

// Internal modules
import ExperienceSection from './ExperienceSection';
import { ExpContainer } from '../../styles/expStyles';
import { workExp } from './experienceInfo';
import TechFilter from './TechFilter';

function Experience() {
  return (
    <Element name="experience-section">
      <ExpContainer>
        <h1>Experience</h1>
        <TechFilter />
        <ExperienceSection experience={workExp} />
      </ExpContainer>
    </Element>
  );
}
export default Experience;
