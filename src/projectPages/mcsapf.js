import {style_background, style_ipp_h, style_ipp_mt, style_ipp_ph} from '../styles';
import NavBar from '../NavBar';
import {mcsapfPic} from '../images';

function MCSAPF() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '8rem'}}>            
        <a
          href="https://github.com/lhosk/Physical-Computing/blob/main/code_monte_carlo_simulation_on_atomic_packing_factor.ino" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Monte Carlo Simulation for Atomic Packing Factors
        </a>
      </div>

      {/* Main Text */}
      <div style={style_ipp_mt}>
        {`
          // tools: matlab, monte carlo simulation, random sampling, 2d geometry, 3d geometry, spatial estimation, numerical methods
          
          this was my second monte carlo simulation project and my first time using an arduino
          i used it as an end of semester presentation for my physical computing class and got the idea from my solid state physics class

          this project kind of backpacks my other MCS project
          regardless, the atomic packing factor (APF) is the volume of atoms vs total volume of the unit cell
          essentially, it shows how packed a crystal is of atoms
          the APF can be found mathematically for all atom combinations
          however if you want a quick estimation for a unique combination, you could chuck the radii and positions into the MCS and determine the APF

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
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'clamp(20rem, 40vw, 40rem)', paddingBottom: '2rem'}}>
        <img src={mcsapfPic} style={{...style_ipp_ph, width: 'clamp(400px, 60vw, 650px)'}} alt="mcsapf" />
      </div>

    </div>
  );
}

export default MCSAPF