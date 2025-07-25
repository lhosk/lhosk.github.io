import {style_background, style_ipp_h, style_ipp_mt} from '../styles';
import NavBar from '../NavBar';

function RedLightGreenLight() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '8rem'}}>    
        <a
          href="https://github.com/lhosk/Physical-Computing/blob/main/code_red_light_green_light.ino" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Red Light Green Light Game
        </a>
      </div>

      {/* Main Text */}

    </div>
  );
}

export default RedLightGreenLight