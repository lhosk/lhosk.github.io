import {style_background, stylet_header} from '../styles';
import NavBar from '../NavBar';

function AtariRL() {

  return (
    <div style={{...style_background}}>
      <NavBar />
      
      <div style={{...stylet_header, top: '8rem'}}>
        {`Reinforcement Learning Using Atari`}
      </div>

    </div>
  );
}

export default AtariRL