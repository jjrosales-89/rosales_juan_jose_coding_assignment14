import './ProjectCard.css';

export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  techList: string[];
  link?: string;
  linkLabel?: string;
}

function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  techList,
  link,
  linkLabel = 'View project',
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <img className="project-card__image" src={imageSrc} alt={imageAlt} />

      <div className="project-card__content">
        <h2>{title}</h2>

        <p className="project-card__description">{description}</p>

        <h3 className="project-card__tech-heading">Technologies</h3>

        <ul
          className="project-card__tech-list"
          aria-label={`${title} technologies`}
        >
          {techList.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-card__footer">
          {link ? (
            <a
              className="project-card__link"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {linkLabel}
            </a>
          ) : (
            <span className="project-card__link-status">
              Project link being prepared
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
