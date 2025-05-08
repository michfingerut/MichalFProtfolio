// External modules
import { Element } from 'react-scroll';

// Internal modules
import ExperienceSection from './ExperienceSection';
import { ExpContainer } from '../../styles/expStyles';
import { infinityExp } from './experienceInfo';
import TechFilter from './TechFilter';

function Experience() {
  return (
    <Element name="experience-section">
      <ExpContainer>
        <h1>Experience</h1>
        <TechFilter />
        <ExperienceSection experience={infinityExp} />
      </ExpContainer>
    </Element>
  );
}
export default Experience;
