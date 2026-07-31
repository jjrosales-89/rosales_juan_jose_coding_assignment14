import './ResourceCard.css';

export interface ResourceCardProps {
  title: string;
  icon: string;
  summary: string;
  link: string;
}

function ResourceCard({ title, icon, summary, link }: ResourceCardProps) {
  return (
    <article className="resource-card">
      <div className="resource-card__icon" aria-hidden="true">
        {icon}
      </div>

      <div className="resource-card__content">
        <h2>{title}</h2>
        <p>{summary}</p>

        <a
          className="resource-card__link"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Open {title}
        </a>
      </div>
    </article>
  );
}

export default ResourceCard;
