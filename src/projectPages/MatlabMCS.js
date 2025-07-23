import {style_background, stylet_header} from '../styles';
import NavBar from '../NavBar';

function MatlabMCS() {

  return (
    <div style={{...style_background}}>
      <NavBar />
      
      <div style={{...stylet_header, top: '8rem'}}>
        {`Monte-Carlo Simulation to Predict Size of Circles and Spheres`}
      </div>

    </div>
  );
}

export default MatlabMCS