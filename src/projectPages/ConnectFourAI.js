import {style_background, style_ipp_h, style_ipp_mt} from '../styles';
import NavBar from '../NavBar';

function ConnectFour() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '8rem'}}>       
        <a
          href="https://github.com/lhosk/Applied-AI/tree/main/Connect-Four-Minimax-And-AB-Pruning" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Connect Four with MiniMax and AB Pruning
        </a>
      </div>

      {/* Main Text */}

    </div>
  );
}

export default ConnectFour