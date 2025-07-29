import {style_background, style_ipp_h, style_ipp_mt, style_ipp_ph} from '../styles';
import NavBar from '../NavBar';
import {connectFourPic} from '../images';

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
      <div style={style_ipp_mt}>
        {`
          tools: python, pygame, tkinter, minimax, alpha-beta pruning

          this project was my first time making a game, interface, and AI algorithms
          it was also my second AI related project, with the AI as MiniMax and AB Pruning

          the user can choose which ai to play and change who gets to play first

          there are 4 files to the program
          here is a list of their descriptions:

          interface: contains all visuals of the game
          main: runs Connect4 game, contains running loop, checks winning conditions
          solver: contains the algorithms for MiniMax and AB Pruning
          textlog: outputs all moves, time taken, nodes searched

          minimax is relatively easy to beat
          however, i have not beaten AB Pruning
          i do think it is beatable though

          the game and the textlog looks like:
        `
          .trim()
          .split('\n')
          .map((line, i) => (
            <p
              key={i}
              style={{
                margin: line.trim() === '' ? '0.5rem 0' : '0.3rem 0',
                lineHeight: '1.4',
              }}
            >
              {line.trim() === '' ? '\u00A0' : line.trim()}
            </p>
          ))}
      </div>

      {/* Photos */}
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'clamp(40rem, 80vw, 55rem)', paddingBottom: '2rem'}}>
        <img src={connectFourPic} style={style_ipp_ph} alt="connect_four" />
      </div>

    </div>
  );
}

export default ConnectFour