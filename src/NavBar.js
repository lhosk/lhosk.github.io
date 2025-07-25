import { Link } from 'react-router-dom';
import { style_nb_ltr, style_nb_ltl } from './styles';


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
    {/* Top Left Link */}
    <div style={style_nb_ltl} className="top-left">
      <Link to={homeLink.to} style={{ color: 'white', textDecoration: 'underline' }}>
        {homeLink.label}
      </Link>
    </div>

    {/* Top Right Links */}
    <div style={style_nb_ltr} className="top-right">
      {otherLinks.map(({ label, to, external }) => (
        <div key={label}>
          {external ? (
            <a href={to} style={{ color: 'white', textDecoration: 'underline' }} className="home-link">
              {label}
            </a>
          ) : (
            <Link to={to} style={{ color: 'white', textDecoration: 'underline' }} className="home-link">
              {label}
            </Link>
          )}
        </div>
      ))}
    </div>
  </>
);


export default NavBar;