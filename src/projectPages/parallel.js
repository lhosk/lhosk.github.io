import {style_background, style_ipp_h, style_ipp_mt} from '../styles';
import NavBar from '../NavBar';

function Parallel() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '8rem'}}>           
        <a
          href="https://github.com/lhosk/Parallel-Computing" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Parallel Computing on an HPC
        </a>
      </div>

      {/* Main Text */}

    </div>
  );
}

export default Parallel