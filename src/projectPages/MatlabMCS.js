import {style_background, style_ipp_h, style_ipp_mt} from '../styles';
import NavBar from '../NavBar';

function MatlabMCS() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '8rem'}}>    
        {`Monte-Carlo Simulation to Predict Size of Circles and Spheres`}
      </div>

      {/* Main Text */}

    </div>
  );
}

export default MatlabMCS