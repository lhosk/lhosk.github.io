import {style_background, stylet_header} from '../styles';
import NavBar from '../NavBar';

function AtariRL() {

  return (
    <div style={{...style_background}}>
      <NavBar />
      
      <div style={{...stylet_header, top: '8rem'}}>

        <a
          href="https://github.com/lhosk/Applied-AI/tree/main/Reinforcement-Learning" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Reinforcement Learning Using Atari
        </a>
        
      </div>

    </div>
  );
}

export default AtariRL
