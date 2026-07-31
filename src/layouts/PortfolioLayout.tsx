import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

function PortfolioLayout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navigation />

      <main id="main-content" className="site-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default PortfolioLayout;
