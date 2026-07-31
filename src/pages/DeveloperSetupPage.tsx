import { SetupCard, SetupCardProps } from '../components/SetupCard';

const setupSections: SetupCardProps[] = [
  {
    title: 'Visual Studio Code Setup',
    description:
      'Visual Studio Code is my primary editor for front-end, back-end, database, and documentation work.',
    items: [
      'ESLint for identifying JavaScript and TypeScript code-quality issues',
      'Prettier for consistent automatic formatting',
      'Docker extension for viewing images, containers, and logs',
      'GitLens for additional Git history and repository information',
      'Language-specific extensions for Python, Ruby, PHP, and TypeScript',
      'Integrated terminal for running development commands without leaving the editor',
    ],
  },
  {
    title: 'Terminal Setup',
    description:
      'I primarily use the integrated PowerShell terminal in VS Code on Windows.',
    items: [
      'PowerShell for Git, npm, Docker, and project-management commands',
      'Windows Subsystem for Linux with Ubuntu when a Linux environment is useful',
      'Git for source control, branches, commits, and remote repository workflows',
      'Node.js and npm for installing dependencies and running React tools',
      'Docker Desktop for building and running production containers',
    ],
    codeSnippet: `npm ci
npm run quality
npm start
docker build -t project-name .`,
  },
  {
    title: 'Preferred Editor Font',
    description:
      'My current VS Code editor font is Consolas, with Courier New and the system monospace font configured as fallbacks.',
    items: [
      'Clear and readable letterforms',
      'Included with Windows',
      'Consistent appearance in VS Code and terminal environments',
      'Reliable display for code, commands, and configuration files',
    ],
    codeSnippet: `"editor.fontFamily": "Consolas, 'Courier New', monospace"`,
  },
  {
    title: 'Development Workflow',
    description:
      'My workflow combines local development checks with Git hooks, continuous integration, and production builds.',
    items: [
      'Create a feature branch before making changes',
      'Develop and test the feature locally',
      'Run Prettier, ESLint, and unit tests through the quality script',
      'Use Husky to run the checks before each commit',
      'Push the branch so GitHub Actions repeats the checks remotely',
      'Build and test the production application with Docker',
    ],
    codeSnippet: `git switch -c feature/example
npm run quality
git add .
git commit -m "Add example feature"
git push`,
  },
];

function DeveloperSetupPage() {
  return (
    <section className="page">
      <div className="section-heading">
        <p className="page__eyebrow">Development environment</p>
        <h1>Developer Setup</h1>

        <p className="page__lead">
          The editor, terminal, font, tools, and workflow I use to build, test,
          document, and deploy web applications.
        </p>
      </div>

      <div className="setup-grid">
        {setupSections.map((section) => (
          <SetupCard key={section.title} {...section} />
        ))}
      </div>
    </section>
  );
}

export default DeveloperSetupPage;
