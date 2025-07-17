import { Link } from 'react-router-dom';
import { stylet_top_right, stylet_top_left } from './styles';


// Links in the top corners of the pages
const homeLink = { label: 'home', to: '/' };
const otherLinks = [
  { label: 'lhoskin.work@gmail.com', to: 'mailto:lhoskin.work@gmail.com', external: true },
  { label: 'more about me', to: '/more_about_lucas' },
  { label: 'projects', to: '/projects' },
  { label: 'github', to: 'https://github.com/lhosk', external: true }
];


const NavBar = () => (
  <>
    <div style={stylet_top_left}>
      <Link to={homeLink.to} style={{ color: '#fff', textDecoration: 'underline' }}>
        {homeLink.label}
      </Link>
    </div>

    <div style={stylet_top_right}>
      {otherLinks.map(({ label, to, external }) => (
        <div key={label}>
          {external ? (
            <a href={to} style={{ color: '#fff', textDecoration: 'underline' }}>
              {label}
            </a>
          ) : (
            <Link to={to} style={{ color: '#fff', textDecoration: 'underline' }}>
              {label}
            </Link>
          )}
        </div>
      ))}
    </div>
  </>
);


export default NavBar;