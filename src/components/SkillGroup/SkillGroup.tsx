import './SkillGroup.css';

export interface SkillGroupProps {
  title: string;
  description: string;
  skills: string[];
}

function SkillGroup({ title, description, skills }: SkillGroupProps) {
  return (
    <article className="skill-group">
      <h2>{title}</h2>
      <p>{description}</p>

      <ul className="skill-group__list" aria-label={`${title} skills`}>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}

export default SkillGroup;
