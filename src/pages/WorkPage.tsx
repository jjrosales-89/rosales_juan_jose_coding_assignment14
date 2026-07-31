import { ProjectCard, ProjectCardProps } from '../components/ProjectCard';

const projectImage = '/images/projects/project-placeholder.svg';

const projects: ProjectCardProps[] = [
  {
    title: 'Pixel Lore CMS',
    description:
      'A database-driven gaming content management system with authentication, administrative CRUD operations, search, categories, image processing, AJAX comments, and external API integration.',
    imageSrc: projectImage,
    imageAlt: 'Placeholder preview for the Pixel Lore CMS project',
    techList: [
      'PHP',
      'MariaDB',
      'PDO',
      'JavaScript',
      'AJAX',
      'HTML',
      'CSS',
      'RAWG API',
    ],
  },
  {
    title: 'Quilla Alma Store',
    description:
      'An Ecuadorian-inspired e-commerce application with product administration, categories, tags, search, filtering, pagination, image uploads, session-based cart features, and inventory protection.',
    imageSrc: projectImage,
    imageAlt: 'Placeholder preview for the Quilla Alma Store project',
    techList: [
      'Ruby',
      'Ruby on Rails',
      'ActiveRecord',
      'ActiveAdmin',
      'Devise',
      'Active Storage',
      'SQLite',
    ],
  },
  {
    title: 'Winnipeg Parks Explorer',
    description:
      'A Rails application that imports Winnipeg open data and allows users to explore parks through search, filters, pagination, associated amenities and activities, reviews, and interactive maps.',
    imageSrc: projectImage,
    imageAlt: 'Placeholder preview for the Winnipeg Parks Explorer project',
    techList: [
      'Ruby on Rails',
      'ActiveRecord',
      'SQLite',
      'Leaflet',
      'Open Data APIs',
      'Kaminari',
    ],
  },
  {
    title: 'UI Garden Component Library',
    description:
      'A reusable React and TypeScript component library documented with Storybook and supported by automated tests, formatting, linting, Git hooks, Docker, and GitHub Actions.',
    imageSrc: projectImage,
    imageAlt: 'Placeholder preview for the UI Garden component library',
    techList: [
      'React',
      'TypeScript',
      'Storybook',
      'Jest',
      'React Testing Library',
      'Docker',
      'GitHub Actions',
    ],
    link: 'https://github.com/jjrosales-89/rosales_juan_jose_ui_garden',
    linkLabel: 'View repository',
  },
  {
    title: 'Flask and Dash Applications',
    description:
      'Python applications that provide image conversion and QR-code generation through Flask, along with an interactive Dash data visualization supported by Pandas and Jupyter.',
    imageSrc: projectImage,
    imageAlt: 'Placeholder preview for the Flask and Dash applications',
    techList: ['Python', 'Flask', 'Dash', 'Pandas', 'Jupyter', 'HTML', 'CSS'],
  },
  {
    title: 'Secure Login Blog',
    description:
      'A secure PHP blog authentication project with registration, login, logout, password hashing, sessions, prepared SQL statements, input validation, and protection against common web attacks.',
    imageSrc: projectImage,
    imageAlt: 'Placeholder preview for the Secure Login Blog project',
    techList: [
      'PHP',
      'MariaDB',
      'PDO',
      'Apache',
      'Sessions',
      'Password Hashing',
      'Web Security',
    ],
  },
];

function WorkPage() {
  return (
    <section className="page">
      <div className="section-heading">
        <p className="page__eyebrow">Selected coursework</p>
        <h1>Work</h1>

        <p className="page__lead">
          A selection of full-stack applications, component systems, data
          projects, and security-focused coursework completed throughout my
          program.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default WorkPage;
