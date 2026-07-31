import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <p>© {new Date().getFullYear()} Juan José Rosales Ortega</p>
        <p>Built with React, TypeScript, Storybook, and Docker.</p>
      </div>
    </footer>
  );
}

export default Footer;
