import {style_background, stylet_header} from '../styles';
import NavBar from '../NavBar';

function MCSAPF() {

  return (
    <div style={{...style_background}}>
      <NavBar />
      
      <div style={{...stylet_header, top: '8rem'}}>
        {`Arduino: Monte Carlo Simulation for Atomic Packing Factors`}
      </div>

    </div>
  );
}

export default MCSAPF