import { ResourceCard, ResourceCardProps } from '../components/ResourceCard';

const resources: ResourceCardProps[] = [
  {
    title: 'MDN Web Docs',
    icon: 'MDN',
    summary:
      'A primary reference for HTML, CSS, JavaScript, browser APIs, accessibility, and general web-development standards.',
    link: 'https://developer.mozilla.org/',
  },
  {
    title: 'React Documentation',
    icon: 'RE',
    summary:
      'Official React guides and references for building component-based interfaces, managing state, and organizing applications.',
    link: 'https://react.dev/',
  },
  {
    title: 'Storybook Documentation',
    icon: 'SB',
    summary:
      'Documentation for developing, testing, and presenting reusable interface components in an isolated environment.',
    link: 'https://storybook.js.org/docs/',
  },
  {
    title: 'Docker Documentation',
    icon: 'DK',
    summary:
      'Guides and references for creating images, running containers, configuring Dockerfiles, and packaging applications.',
    link: 'https://docs.docker.com/',
  },
  {
    title: 'GitHub Actions',
    icon: 'GH',
    summary:
      'Documentation for automating code-quality checks, tests, builds, and continuous integration workflows in GitHub.',
    link: 'https://docs.github.com/en/actions',
  },
];

function ResourcesPage() {
  return (
    <section className="page">
      <div className="section-heading">
        <p className="page__eyebrow">Development references</p>
        <h1>Resources</h1>

        <p className="page__lead">
          Documentation and learning resources that support my development,
          testing, component-design, deployment, and CI/CD workflows.
        </p>
      </div>

      <div className="resources-grid">
        {resources.map((resource) => (
          <ResourceCard key={resource.title} {...resource} />
        ))}
      </div>
    </section>
  );
}

export default ResourcesPage;
