import {style_background, style_ipp_h, style_ipp_mt, style_ipp_ph} from '../styles';
import NavBar from '../NavBar';
import {mcsapfPic} from '../images';

function MCSAPF() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '10rem'}}>            
        <a
          href="https://github.com/lhosk/Physical-Computing/blob/main/code_monte_carlo_simulation_on_atomic_packing_factor.ino" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Monte Carlo Simulation for Atomic Packing Factors
        </a>
      </div>

      {/* Main Text */}
      <div style={{...style_ipp_mt, whiteSpace: 'pre-wrap'}}>
        {`
          tools: arduino, c++, monte carlo simulation, atomic packing factor, solid state 
          physics, physical computing, numerical methods, random sampling
          
          this was my second monte carlo simulation project and my first time using an arduino
          i used it as an end of semester presentation for my physical computing class 
          however, i got the idea from my solid state physics class

          the atomic packing factor (APF) is the volume of atoms vs total volume of the unit cell
          essentially, it shows how packed a crystal is of atoms
          the APF can be found mathematically for all atom combinations
          however if you want a quick estimation, you can put the radii and positions into the MCS

          the code and more information is attached to the project link
          the arduino wiring looks like:
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
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'clamp(32rem, 60vw, 60rem)', paddingBottom: '2rem'}}>
        <img src={mcsapfPic} style={{...style_ipp_ph, width: 'clamp(320px, 60vw, 650px)'}} alt="mcsapf" />
      </div>

    </div>
  );
}

export default MCSAPF