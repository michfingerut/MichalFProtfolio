import { Element } from 'react-scroll';
import image from '../assets/personal_pic.jpeg';
import {
  AboutContainer,
  AboutSecondaryContainer,
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
    'Mongoose',
    'React.js',
    'Vue.js',
    'html',
    'css',
    'Element Plus',
    'axios',
    'Jest',
    'MongoDB',
    'PostgreSQL',
    'Linux',
    'Git',
    'Docker',
    'AWS',
    'Service oriented architecture SOA',
    'MicroServices architecture',
    'REST APIs',
    'Linux-based environment',
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
          <img src={image} alt="selfie" />
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
              <b>Full Stack Developer - Dashboard team</b>
              <br />
              2022-2024
              <br />
              <span
                style={{
                  display: 'block',
                  marginTop: '10px',
                  marginBottom: '5px',
                }}
              >
                • Oversaw the entire development lifecycle of an educational
                Saas web application (SOA based) for students. Responsibilities
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
            <br />
            <p
              style={{
                lineHeight: '1.6',
                margin: '5px 0',
              }}
            >
              Infinity Labs R&D
              <br />
              <b>Full Stack Developer - Dev core team</b>
              <br />
              2024-2025
              <br />
              <span
                style={{
                  display: 'block',
                  marginTop: '10px',
                  marginBottom: '5px',
                }}
              >
                • Part of the core development team which is responsible for
                architectural decisions, defining company-wide development
                conventions, and developing the infrastructure of the
                application, which includes multiple microservices under its
                responsibility • Developed and maintained a micro-service for
                guest users invites management system
              </span>
              <br />
              <span>
                • Developed and maintained a micro-service for guest users
                invites management system
              </span>
              <br />
              <span>
                • Created and managed npm packages to be used across the app's
                services.
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
