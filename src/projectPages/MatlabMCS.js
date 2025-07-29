import {style_background, style_ipp_h, style_ipp_mt, style_ipp_ph} from '../styles';
import NavBar from '../NavBar';
import {matlabMCSPic} from '../images';

function MatlabMCS() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '10rem'}}>    
        {`Monte-Carlo Simulation to Predict Size of Circles and Spheres`}
      </div>

      {/* Main Text */}
      <div style={{...style_ipp_mt, whiteSpace: 'pre-wrap', marginTop: '11rem'}}>
        {`
          tools: matlab, monte carlo simulation, random sampling, 
          2d and 3d geometry, spatial estimation, numerical methods
          
          this was my first time coding anything
          it was for a computational physics (matlab) class
          the problem is to estimate the area of a circle using a monte carlo simulation

          later, i would update this to include multiple circles
          then, i would add holes to the program
          (allows user to predict area of the circles - area of hole)

          once i was done with the 2d version, i turned it into a 3d problem
          so, i updated it with spheres and spherical holes

          lastly, i added ellipses

          one of the outputs can be found below:
          (pink is the sphere we are measure and black is a "spherical hole")

          since then, my matlab has improved via quantum computing research
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
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'clamp(42rem, 80vw, 57rem)', paddingBottom: '2rem'}}>
        <img src={matlabMCSPic} style={style_ipp_ph} alt="matlab_mcs" />
      </div>

    </div>
  );
}

export default MatlabMCS