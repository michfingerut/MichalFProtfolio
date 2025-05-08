// Internal modules
import knGroupPage from '../../assets/kn_group_page.png';
import knEdit from '../../assets/kn_edit.png';

export const projects = [
  {
    name: 'Keeper Notes',
    description:
      'KeeperNotes is a web app for managing personal notes, groups, and members. It enables users to create, edit, and delete notes, manage group memberships, and collaborate seamlessly. ',
    techStack: [
      'React.js',
      'Node.js',
      'JavaScript',
      'Express',
      'Sequelize',
      'Material UI',
      'Axios',
      'Styled components',
      'Jest',
      'PostgreSQL',
      'Docker',
    ],
    images: [knGroupPage, knEdit],
  },
  {
    name: 'Crypto Balance System',
    description:
      'A NestJS monorepo project with two microservices: a Rate Service that fetches and caches crypto rates from CoinGecko, and a Balance Service that calculates user balances based on transactions. ',
    techStack: [
      'Node.js',
      'TypeScript',
      'Nest.js',
      'Express',
      'Object oriented programming',
      'Jest',
      'Docker',
    ],
  },
  {
    name: 'Developer Portfolio',
    description:
      'A personal portfolio website built with React to showcase projects, skills, and contact information. Hosted on GitHub Pages with a responsive design and clean user interface.',
    techStack: [
      'React.js',
      'JavaScript',
      'Styled components',
      'HTML',
      'CSS',
      'GitHub Pages',
    ],
  },
];
