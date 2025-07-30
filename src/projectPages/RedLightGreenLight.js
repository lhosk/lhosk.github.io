import {style_background, style_ipp_h, style_ipp_mt, style_ipp_ph} from '../styles';
import NavBar from '../NavBar';
import {rlglPic} from '../images';

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
      <div style={style_ipp_mt}>
        {`
          tools: arduino, potentiometer, leds, piezo buzzer, digital display, buttons, 
          prototyping, breadboard wiring, embedded programming

          this was the other arduino project i did for my physical computing class
          i made the kids game: red light green light

          the user can choose different level of difficulty via a potentiometer
          for example, easy is 25 clicks
          medium is 50 and so on

          the user can click the start button to start the game
          then the lights will change between red and green

          if the player wins or loses, actions appear via the display, lights, and sound

          here is what the arduino looks like:
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
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'clamp(30rem, 65vw, 55rem)', paddingBottom: '2rem'}}>
        <img src={rlglPic} style={{...style_ipp_ph, width: 'clamp(300px, 60vw, 650px)'}} alt="rlgl" />
      </div>

    </div>
  );
}

export default RedLightGreenLight