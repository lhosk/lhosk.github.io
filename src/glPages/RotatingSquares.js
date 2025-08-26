import {style_background, style_ipp_h} from '../styles';
import BackBar from '../BackBar';

function RotatingSquares() {

  return (
    <div style={style_background}>

      <BackBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '8rem'}}>       
        <a
          href="https://github.com/lhosk/opengl-and-webgl/tree/main/rotating-squares" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Rotating Squares
        </a>
      </div>

      {/* Demo */}
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', marginTop: '8rem'}}>
        <iframe
          scrolling="no"
          src="/glAnimations/RotatingSquares/square.html"
          title="Rotating Squares"
          style={{ border: 'none', width: 512, height: 512, display: 'block' }}
        />
      </div>

    </div>
  );
}

export default RotatingSquares