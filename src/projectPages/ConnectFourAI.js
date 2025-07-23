import {style_background, stylet_header} from '../styles';
import NavBar from '../NavBar';

function ConnectFour() {

  return (
    <div style={style_background}>
      <NavBar />
      
      <div style={{...stylet_header, top: '8rem'}}>
        
        <a
          href="https://github.com/lhosk/Applied-AI/tree/main/Connect-Four-Minimax-And-AB-Pruning" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Connect Four with MiniMax and AB Pruning
        </a>

      </div>

    </div>
  );
}

export default ConnectFour