import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <section className="page">
      <p className="page__eyebrow">Error 404</p>
      <h1>Page not found</h1>

      <p className="page__lead">
        The page you requested does not exist or may have been moved.
      </p>

      <Link className="text-link" to="/">
        Return to the home page
      </Link>
    </section>
  );
}

export default NotFoundPage;
