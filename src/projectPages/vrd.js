import {style_background, style_ipp_h, style_ipp_mt} from '../styles';
import NavBar from '../NavBar';

function VRD() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '8rem'}}>       
        <a
          href="https://github.com/lhosk/Virtual-Retinal-Display" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Virtual Retinal Display
        </a>
      </div>

      {/* Main Text */}

    </div>
  );
}

export default VRD