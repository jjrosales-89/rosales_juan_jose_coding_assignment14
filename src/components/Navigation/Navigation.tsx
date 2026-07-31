import { NavLink } from 'react-router';
import './Navigation.css';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Skills', path: '/skills' },
  { label: 'Resources', path: '/resources' },
  { label: 'Developer Setup', path: '/developer-setup' },
];

function Navigation() {
  return (
    <header className="site-header">
      <div className="navigation">
        <NavLink className="site-brand" to="/">
          Juan José Rosales
        </NavLink>

        <nav aria-label="Primary navigation">
          <ul className="navigation__list">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  className={({ isActive }) =>
                    `navigation__link${isActive ? ' navigation__link--active' : ''}`
                  }
                  end={item.path === '/'}
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
