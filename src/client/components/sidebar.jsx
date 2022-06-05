import { Link, useLocation } from 'react-router-dom'
import { Logo, Dashboard, Statistics, Measures, Settings } from '@/assets'

const LINKS = [
  {
    name: 'Dashboard',
    path: '/',
    icon: Dashboard,
  },
  {
    name: 'Statistics',
    path: '/statistics',
    icon: Statistics,
  },
  {
    name: 'Measures',
    path: '/measures',
    icon: Measures,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: Settings,
  },
]

export const Sidebar = () => {
  const location = useLocation()

  return (
    <aside>
      <div className='logo'>
        <Link to="/">
          <Logo className="m-auto mt-9" />
          <span>Covid!</span>
        </Link>
      </div>

      <div className="links">
        {LINKS.map((link) => (
          <Link
            to={link.path}
            key={link.path}
            className={location.pathname === link.path ? 'activeLink' : ''}
          >
            <link.icon />
            <span
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  )
}
