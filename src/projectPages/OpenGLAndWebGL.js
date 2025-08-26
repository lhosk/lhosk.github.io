import {style_background, style_ipp_h, style_pp_lt, style_pp_link_gap} from '../styles';
import NavBar from '../NavBar';
import {Link} from 'react-router-dom';

function OpenGLAndWebGL() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '8rem'}}>       
        <a
          href="https://github.com/lhosk/opengl-and-webgl" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          OpenGL And WebGL
        </a>
      </div>

      {/* Listing All Projects Below */}
      <div style={{marginTop: '10rem'}}>

        <ul style={style_pp_lt}>
          
          <li>
              <Link to="rotating_squares" style = {style_pp_link_gap}>
              Rotating Squares</Link>

          </li>

        </ul>

      </div>

    </div>
  );
}

export default OpenGLAndWebGL