import { ProjectCard, ProjectCardProps } from '../components/ProjectCard';

const projects: ProjectCardProps[] = [
  {
    title: 'Pixel Lore CMS',
    description:
      'A database-driven gaming content management system with authentication, administrative CRUD operations, search, categories, image processing, AJAX comments, and external API integration.',
    imageSrc: '/images/projects/pixel-lore.jpg',
    imageAlt: 'Pixel Lore CMS game catalog interface',
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
    link: 'https://github.com/jjrosales-89/pixel-lore',
    linkLabel: 'View repository',
  },
  {
    title: 'Quilla Alma Store',
    description:
      'An Ecuadorian-inspired e-commerce application with product administration, categories, tags, search, filtering, pagination, image uploads, session-based cart features, and inventory protection.',
    imageSrc: '/images/projects/quilla-alma.jpg',
    imageAlt: 'Quilla Alma Store product catalog interface',
    techList: [
      'Ruby',
      'Ruby on Rails',
      'ActiveRecord',
      'ActiveAdmin',
      'Devise',
      'Active Storage',
      'SQLite',
    ],
    link: 'https://github.com/jjrosales-89/quilla_alma_store',
    linkLabel: 'View repository',
  },
  {
    title: 'Winnipeg Parks Explorer',
    description:
      'A Rails application that imports Winnipeg open data and allows users to explore parks through search, filters, pagination, associated amenities and activities, reviews, and interactive maps.',
    imageSrc: '/images/projects/winnipeg-parks.jpg',
    imageAlt: 'Winnipeg Parks Explorer search results and interactive map',
    techList: [
      'Ruby on Rails',
      'ActiveRecord',
      'SQLite',
      'Leaflet',
      'Open Data APIs',
      'Kaminari',
    ],
    link: 'https://github.com/jjrosales-89/winnipeg_parks_explorer',
    linkLabel: 'View repository',
  },
  {
    title: 'UI Garden Component Library',
    description:
      'A reusable React and TypeScript component library documented with Storybook and supported by automated tests, formatting, linting, Git hooks, Docker, and GitHub Actions.',
    imageSrc: '/images/projects/ui-garden.jpg',
    imageAlt: 'UI Garden components displayed in Storybook',
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
    imageSrc: '/images/projects/flask-dash.jpg',
    imageAlt: 'Flask and Dash application interface',
    techList: ['Python', 'Flask', 'Dash', 'Pandas', 'Jupyter', 'HTML', 'CSS'],
    linkStatus: 'Repository unavailable',
  },
  {
    title: 'Secure Login Blog',
    description:
      'A secure PHP blog authentication project with registration, login, logout, password hashing, sessions, prepared SQL statements, input validation, and protection against common web attacks.',
    imageSrc: '/images/projects/secure-login-blog.jpg',
    imageAlt: 'Secure Login Blog authentication interface',
    techList: [
      'PHP',
      'MariaDB',
      'PDO',
      'Apache',
      'Sessions',
      'Password Hashing',
      'Web Security',
    ],
    linkStatus: 'Repository unavailable',
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
