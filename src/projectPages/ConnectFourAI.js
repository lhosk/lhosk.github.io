import {style_background, stylet_header} from '../styles';
import NavBar from '../NavBar';

function ConnectFour() {

  return (
    <div style={{...style_background}}>
      <NavBar />
      
      <div style={{...stylet_header, top: '8rem'}}>
        {`Connect Four with MiniMax and AB Pruning`}
      </div>

    </div>
  );
}

export default ConnectFour