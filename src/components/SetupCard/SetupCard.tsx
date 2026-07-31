import './SetupCard.css';

export interface SetupCardProps {
  title: string;
  description: string;
  items: string[];
  codeSnippet?: string;
}

function SetupCard({ title, description, items, codeSnippet }: SetupCardProps) {
  return (
    <article className="setup-card">
      <h2>{title}</h2>
      <p>{description}</p>

      <ul className="setup-card__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {codeSnippet && (
        <pre className="setup-card__code">
          <code>{codeSnippet}</code>
        </pre>
      )}
    </article>
  );
}

export default SetupCard;
