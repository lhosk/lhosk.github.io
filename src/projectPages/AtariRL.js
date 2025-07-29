import {style_background, style_ipp_h, style_ipp_mt} from '../styles';
import NavBar from '../NavBar';
import {freeway, pong} from '../videos';

function AtariRL() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '8rem'}}>    
        <a
          href="https://github.com/lhosk/Applied-AI/tree/main/Reinforcement-Learning" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Reinforcement Learning Using Atari
        </a>
      </div>

      {/* Main Text */}
      <div style={style_ipp_mt}>
        {`
          tools: python, stable-baselines3, A2C, ALE

          this project was the first reinforcement learning project i’ve done
          it trains on atari games using A2C

          although this is pretty basic, i am working on RL for F1 tracks
          soon enough, you’ll be able to check this out on the projects page

          anyways, the first game the I trained on was Pong
          over 12 parallel environments, it needed 2.5 million steps to play well

          the second game that I trained on was Freeway (similar to frogger)
          also over 12 parallel environments, it only needed 100k steps to play well

          15 second videos of freeway and pong respectively are provided below
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
      
      {/* Videos */}
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'clamp(35rem, 60vw, 52rem)', paddingBottom: '2rem'}}>
        <video
          src={freeway} controls
          style={{width: '90%', maxWidth: '600px'}}
        />
        <div style={{ height:'1rem'}} />
        <video
          src={pong} controls
          style={{width: '90%', maxWidth: '600px'}}
        />
      </div>

    </div>
  );
}

export default AtariRL
