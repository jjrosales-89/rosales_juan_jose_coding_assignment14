import { SkillGroup, SkillGroupProps } from '../components/SkillGroup';

const skillGroups: SkillGroupProps[] = [
  {
    title: 'Languages',
    description:
      'Programming, scripting, markup, styling, and database languages used throughout my coursework and projects.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'PHP',
      'SQL',
      'Ruby',
      'Python',
    ],
  },
  {
    title: 'Frameworks and Libraries',
    description:
      'Tools used to create responsive interfaces, full-stack applications, data workflows, and reusable components.',
    skills: [
      'React',
      'React Router',
      'Next.js',
      'Node.js',
      'Ruby on Rails',
      'ActiveRecord',
      'Bootstrap',
      'Styled Components',
      'Pandas',
      'Flask',
      'Dash',
    ],
  },
  {
    title: 'Databases and Data Tools',
    description:
      'Relational database systems and tools used for schema design, queries, CRUD operations, imports, and data management.',
    skills: [
      'MySQL',
      'MariaDB',
      'PostgreSQL',
      'SQLite',
      'phpMyAdmin',
      'DBeaver',
      'CSV Data',
      'REST APIs',
    ],
  },
  {
    title: 'Testing and Development Tools',
    description:
      'Tools used to test code, maintain quality, manage versions, automate checks, and create production builds.',
    skills: [
      'Jest',
      'React Testing Library',
      'Storybook',
      'ESLint',
      'Prettier',
      'Husky',
      'Git',
      'GitHub',
      'GitHub Actions',
      'Docker',
      'VS Code',
      'Command Line',
    ],
  },
  {
    title: 'Development Practices',
    description:
      'Practices applied when planning, building, securing, testing, and documenting web applications.',
    skills: [
      'Responsive Design',
      'CRUD',
      'Relational Database Design',
      'Authentication',
      'Input Validation',
      'Secure Data Handling',
      'Object-Oriented Programming',
      'Automated Testing',
      'CI/CD',
      'Technical Documentation',
      'Agile Workflows',
    ],
  },
  {
    title: 'Design and Digital Tools',
    description:
      'Design and productivity applications that support visual communication, prototyping, documentation, and client work.',
    skills: [
      'Figma',
      'Adobe Creative Suite',
      'WordPress',
      'Webflow',
      'Microsoft Office',
      'Digital Marketing',
      'Visual Identity',
      'UI Design',
    ],
  },
];

function SkillsPage() {
  return (
    <section className="page">
      <div className="section-heading">
        <p className="page__eyebrow">Technical abilities</p>
        <h1>Skills</h1>

        <p className="page__lead">
          My skill set combines full-stack development, databases, automated
          testing, deployment, visual design, and technical documentation.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} {...group} />
        ))}
      </div>
    </section>
  );
}

export default SkillsPage;
