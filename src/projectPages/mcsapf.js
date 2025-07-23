import {style_background, stylet_header} from '../styles';
import NavBar from '../NavBar';

function MCSAPF() {

  return (
    <div style={style_background}>
      <NavBar />
      
      <div style={{...stylet_header, top: '8rem'}}>
        
        <a
          href="https://github.com/lhosk/Applied-AI/tree/main/Connect-Four-Minimax-And-AB-Pruning" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Arduino: Monte Carlo Simulation for Atomic Packing Factors
        </a>

      </div>

    </div>
  );
}

export default MCSAPF