import {Link} from 'react-router-dom';
import {style_nb_ltl} from './styles';


// Links in the top corners of the pages
const backLink = {label: 'back', to: '/projects/opengl_and_webgl'};


const BackBar = () => (
  <>
    {/* Top Left Link */}
    <div style={style_nb_ltl} className="top-left">
      <Link to={backLink.to} style={{ color: 'white', textDecoration: 'underline' }}>
        {backLink.label}
      </Link>
    </div>

  </>
);


export default BackBar;