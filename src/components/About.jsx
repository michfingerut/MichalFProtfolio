import { Element } from 'react-scroll';
import image from '../assets/personal_pic.jpeg';
import {
  AboutContainer,
  AboutSecondaryContainer,
  AboutBoxesContainer,
  TechStack,
  TechItem,
} from '../styles/styles';

function About() {
  const techStack = [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express',
    'Socket.io',
    'Sequelize',
    'Jest',
    'PostgreSQL',
    'Linux',
    'MicroServices architecture',
    'REST APIs',
  ];
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

        <AboutSecondaryContainer
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            <h1>Experience</h1>
            <p
              style={{
                lineHeight: '1.6',
                margin: '5px 0',
              }}
            >
              Infinity Labs R&D
              <br />
              Full Stack Developer
              <br />
              2022-Present
              <br />
              <span
                style={{
                  display: 'block',
                  marginTop: '10px',
                  marginBottom: '5px',
                }}
              >
                • Oversaw the entire development lifecycle of an educational web
                application (MicroServices based) for students. Responsibilities
                included designing and implementing REST APIs, adding new
                features, and performing ongoing maintenance to improve
                functionality and user experience.
              </span>
              <span>
                • Acted as the main software developer in the team, defining
                workflows, operational procedures, and guidelines for
                development, and served as the primary point of contact for
                support and technical questions from team members.
              </span>
              <span>
                • Optimized system performance and improved response times by
                80%.
              </span>
              <span>
                • Deployed the application to production with CI/CD pipelines.
              </span>
              <span>
                • Refactored the backend by independently rewriting all services
                to extract the core framework, maintaining server functionality
                while significantly improving performance, scalability, and the
                overall development process.
              </span>
              <span>
                • Mentored students in a software development bootcamp.
              </span>
            </p>
          </div>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <TechStack>
              {techStack.map((tech, index) => (
                <TechItem key={index}>{tech}</TechItem>
              ))}
            </TechStack>
          </div>
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
          {/* //TODO!!!! */}
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
