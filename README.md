# Coding Assignment 14 — Portfolio Website

A multi-page portfolio website built with Create React App, React, TypeScript, and the reusable component library developed in previous WEBD-3012 assignments.

The portfolio highlights selected coursework, technical skills, development resources, and my developer setup.

## Portfolio Sections

- Basic Information
- Work
- Skills
- Resources
- Developer Setup

## Main Features

- Multi-page navigation with React Router
- Responsive layouts for desktop and mobile screens
- Reusable portfolio components
- Project screenshots, descriptions, links, and technology lists
- Storybook component documentation
- Automated unit tests
- ESLint and Prettier code-quality checks
- Husky pre-commit quality checks
- GitHub Actions CI pipeline
- Dockerized React production build
- Nginx routing support for direct page refreshes

## Technologies

- React
- TypeScript
- Create React App
- React Router
- Storybook
- Jest
- React Testing Library
- ESLint
- Prettier
- Husky
- Git and GitHub
- GitHub Actions
- Docker
- Nginx

## Requirements

Install the following before running the project:

- Node.js 20 or later
- npm
- Git
- Docker Desktop

## Clone the Repository

```bash
git clone https://github.com/jjrosales-89/rosales_juan_jose_coding_assignment14.git
cd rosales_juan_jose_coding_assignment14
```

## Install Dependencies

```bash
npm ci
```

`npm ci` installs the exact dependency versions recorded in `package-lock.json`.

## Run the Development Site

```bash
npm start
```

Open:

```text
http://localhost:3000
```

## Run Storybook

```bash
npm run storybook
```

Open:

```text
http://localhost:6006
```

Storybook displays and documents the reusable component library and the portfolio-specific components.

## Run Code-Quality Checks

Run Prettier, ESLint, and all unit tests together:

```bash
npm run quality
```

Run individual checks:

```bash
npm run format:check
npm run lint
npm run test:ci
```

Automatically format supported files:

```bash
npm run format
```

## Create the React Production Build

```bash
npm run build
```

The optimized Create React App files are generated in:

```text
build/
```

## Create the Storybook Production Build

```bash
npm run build-storybook
```

The static Storybook files are generated in:

```text
storybook-static/
```

## Docker Configuration

### Required image and container name

```text
rosales_juan_jose_coding_assignment14
```

### Working directory inside the container

```text
/rosales_juan_jose_final_site
```

### Required port

```text
5575
```

## Build the Docker Image

From the project root, run:

```bash
docker build -t rosales_juan_jose_coding_assignment14 .
```

The multi-stage Dockerfile:

1. Installs dependencies with Node.js.
2. Creates the optimized React production build.
3. Copies the production files into an Nginx runtime image.
4. Serves the portfolio on port `5575`.

## Run the Docker Container

```bash
docker run -d -p 5575:5575 --name rosales_juan_jose_coding_assignment14 rosales_juan_jose_coding_assignment14
```

Open:

```text
http://localhost:5575
```

The following routes can also be opened or refreshed directly:

```text
http://localhost:5575/work
http://localhost:5575/skills
http://localhost:5575/resources
http://localhost:5575/developer-setup
```

## Verify the Container

View the running container:

```bash
docker ps
```

Verify the working directory:

```bash
docker exec rosales_juan_jose_coding_assignment14 pwd
```

Expected result:

```text
/rosales_juan_jose_final_site
```

## Stop and Remove the Container

```bash
docker stop rosales_juan_jose_coding_assignment14
docker rm rosales_juan_jose_coding_assignment14
```

Remove the image when it is no longer needed:

```bash
docker rmi rosales_juan_jose_coding_assignment14
```

## CI/CD Pipeline

The GitHub Actions workflow runs automatically for pushes and pull requests.

The pipeline performs these steps:

1. Checks out the repository.
2. Sets up Node.js 20.
3. Installs dependencies with `npm ci`.
4. checks Prettier formatting.
5. Runs ESLint.
6. Runs unit tests.
7. Creates the React production build.
8. Creates the Storybook production build.
9. Builds the Docker production image.

This process detects formatting, code-quality, testing, build, and deployment problems before changes are accepted.

## Husky Pre-Commit Hook

Husky runs the combined quality script before a Git commit is created:

```bash
npm run quality
```

A commit is stopped when formatting, linting, or unit tests fail.

## Troubleshooting

### Port `5575` is already in use

Identify or stop the existing container:

```bash
docker ps
docker rm -f rosales_juan_jose_coding_assignment14
```

Then run the required container again.

### The container name is already in use

```bash
docker rm -f rosales_juan_jose_coding_assignment14
```

### Dependencies are missing or inconsistent

```bash
rm -rf node_modules
npm ci
```

In Windows PowerShell:

```powershell
Remove-Item node_modules -Recurse -Force
npm ci
```

## Repository

```text
https://github.com/jjrosales-89/rosales_juan_jose_coding_assignment14
```

## Author

Juan José Rosales Ortega
Full Stack Web Development
RRC Polytech
