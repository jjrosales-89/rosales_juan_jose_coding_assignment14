import { Link } from 'react-router';
import { Card } from '../components/Card';

const profileHighlights = [
  {
    title: 'Current Program',
    text: 'Full Stack Web Development diploma at Red River College Polytechnic in Winnipeg, Manitoba.',
  },
  {
    title: 'Development Focus',
    text: 'Full-stack applications, databases, responsive interfaces, automated testing, Docker, and CI/CD workflows.',
  },
  {
    title: 'Professional Background',
    text: 'More than ten years of experience in graphic design, web design, digital marketing, and client-focused projects.',
  },
];

function HomePage() {
  return (
    <section className="page home-page">
      <div className="home-hero">
        <p className="page__eyebrow">Full-Stack Developer Portfolio</p>

        <h1>Juan José Rosales Ortega</h1>

        <p className="page__lead">
          I build responsive, database-driven web applications that combine
          development, testing, deployment, visual design, and clear technical
          documentation.
        </p>

        <div className="home-hero__actions">
          <Link className="button-link button-link--primary" to="/work">
            View my work
          </Link>

          <Link className="button-link button-link--secondary" to="/skills">
            Explore my skills
          </Link>
        </div>
      </div>

      <section className="content-section" aria-labelledby="basic-info-heading">
        <div className="section-heading">
          <p className="page__eyebrow">About me</p>
          <h2 id="basic-info-heading">Basic Information</h2>

          <p>
            I am a Full-Stack Web Developer with a background in graphic and web
            design. My current studies focus on building, testing, and deploying
            reliable web applications using modern development workflows.
          </p>
        </div>

        <div className="profile-card-grid">
          {profileHighlights.map((highlight) => (
            <Card
              key={highlight.title}
              title={highlight.title}
              text={highlight.text}
            />
          ))}
        </div>
      </section>

      <section
        className="content-section content-section--accent"
        aria-labelledby="approach-heading"
      >
        <div className="section-heading">
          <p className="page__eyebrow">My approach</p>
          <h2 id="approach-heading">Development with a design perspective</h2>

          <p>
            My previous design experience helps me consider usability,
            accessibility, visual consistency, and business goals alongside
            technical requirements.
          </p>
        </div>

        <div className="approach-grid">
          <article>
            <h3>Build</h3>
            <p>
              Develop responsive front-end interfaces and structured back-end
              applications.
            </p>
          </article>

          <article>
            <h3>Test</h3>
            <p>
              Use automated tests, linting, and formatting to maintain reliable
              code.
            </p>
          </article>

          <article>
            <h3>Deploy</h3>
            <p>
              Create production builds with Docker and validate changes through
              CI/CD pipelines.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}

export default HomePage;
