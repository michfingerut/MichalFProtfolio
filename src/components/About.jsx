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
  const techStackExp = [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express',
    'Socket.io',
    'Sequelize',
    'Vue.js',
    'Element Plus',
    'axios',
    'Jest',
    'PostgreSQL',
    'Linux',
    'Git',
    'Docker',
    'AWS',
    'MicroServices architecture',
    'REST APIs',
  ];

  const techStackCourse = [
    'C',
    'Java',
    'MySQL',
    'Object-Oriented Programming',
    'Data Structures',
    'Design Patterns',
    'Procedural Programming',
    'Multithreaded Development',
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
              and a commitment to continuous growth.
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
                • Mentored students in a software development bootcamp.
              </span>
            </p>
          </div>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <TechStack>
              {techStackExp.map((tech, index) => (
                <TechItem key={index}>{tech}</TechItem>
              ))}
            </TechStack>
          </div>
        </AboutSecondaryContainer>

        <AboutSecondaryContainer
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div style={{ width: '45%' }}>
            <h1>Education</h1>
            <p
              style={{
                lineHeight: '1.6',
                margin: '5px 0',
              }}
            >
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
          </div>
          <div style={{ width: '45%' }}>
            <TechStack>
              {techStackCourse.map((tech, index) => (
                <TechItem key={index}>{tech}</TechItem>
              ))}
            </TechStack>
          </div>
        </AboutSecondaryContainer>
      </Element>
    </AboutContainer>
  );
}

export default About;
