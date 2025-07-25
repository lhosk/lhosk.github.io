import {style_background, style_ipp_h, style_ipp_mt} from '../styles';
import NavBar from '../NavBar';

function MCSAPF() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '8rem'}}>            
        <a
          href="https://github.com/lhosk/Physical-Computing/blob/main/code_monte_carlo_simulation_on_atomic_packing_factor.ino" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Monte Carlo Simulation for Atomic Packing Factors
        </a>
      </div>

      {/* Main Text */}

    </div>
  );
}

export default MCSAPF