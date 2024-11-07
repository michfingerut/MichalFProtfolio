import { Element } from 'react-scroll';
import image from '../assets/personal_pic.jpeg';
import {
  AboutContainer,
  AboutSecondaryContainer,
  AboutBoxesContainer,
} from '../styles/styles';

function About() {
  return (
    <AboutContainer>
      <Element name="about-section">
        <AboutSecondaryContainer>
          <div>
            <h1>About Me</h1>
            <p>
              Successfully transitioned from a career in optometry to software
              development, showcasing adaptability, a strong learning mindset,
              and a commitment to continuous growth. Results-oriented Software
              Developer with a proven track record in leading complex projects
              and products with significant impact. Highly motivated,
              tech-savvy, problem solver, and collaborative team player,
              passionate about cutting-edge technologies and thriving in dynamic
              environments.
            </p>
          </div>
          <img src={image} />
        </AboutSecondaryContainer>
      </Element>
      <AboutBoxesContainer>
        <AboutSecondaryContainer>
          <h1>Education</h1>
          <p>
            Software Development Extensive Bootcamp
            <br />
            Infinity Labs R&D
            <br />
            2022
            <br />
            <br />
            BSC, Optometry (Cum Laude)
            <br />
            Bar Ilan University
            <br />
            2017-2021
          </p>
        </AboutSecondaryContainer>
        <AboutSecondaryContainer>
          <h1>Experience</h1>
          <p>
            Infinity Labs R&D
            <br />
            Full Stack Developer
            <br />
            2022-Present
            <br />
            • Oversaw the entire development lifecycle of an educational web
            application (MicroServices based) for students.
            <br />
            • Acted as the main software developer in the team.
            <br />
            • Optimized system performance and improved response times by 80%.
            <br />
            • Deployed the application to production with CI/CD pipelines.
            <br />
            • Mentored students in a software development bootcamp.
            <br />
          </p>
        </AboutSecondaryContainer>
        <AboutSecondaryContainer>
          <h1>Tech Stack</h1>
          <ul>
            <li>JavaScript, TypeScript</li>
            <li>Node.js, Express.js</li>
            <li>Socket.IO, Sequelize</li>
            <li>Vue.js, PostgreSQL</li>
            <li>CI/CD Pipelines</li>
            <li>Docker, Git</li>
          </ul>
        </AboutSecondaryContainer>
      </AboutBoxesContainer>
    </AboutContainer>
  );
}

export default About;
