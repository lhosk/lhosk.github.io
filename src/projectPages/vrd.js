import {style_background, style_ipp_h, style_ipp_mt, style_ipp_ph} from '../styles';
import NavBar from '../NavBar';
import {vrdPic} from '../images';

function VRD() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '8rem'}}>       
        <a
          href="https://github.com/lhosk/Virtual-Retinal-Display" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Virtual Retinal Display
        </a>
      </div>

      {/* Main Text */}
      <div style={style_ipp_mt}>
        {`
          tools: virtual retinal display (vrd), optics, optoelectronics, (MEMS) mirrors, 
          lenses, beam splitters, VR, MR, AR, autodesk fusion, python, lighttools

          this was my final project/paper for an optical systems design course

          i made the basics of a virtual retinal display (vrd) using lighttools
          the eye was modeled using autodesk fusion and light was simulated via lighttools
          light scanning was tested using python code

          VRDs bypass screens by projecting light directly onto the retina
          surprisingly… it’s safe! (as long as the total power < 1mw)

          i chose to use three different lasers (rgb)
          wavelengths have different power, but are normalized to human perception
          for each pixel, the power is changed for each laser to match the accurate color
          as each pixel is scanned, the user can see a full picture
          then, it can continue to the next frame
          this could allow for videos!

          i used a combination of lenses, mirrors, and beam splitters to guide the rays
          all materials are real and testable and help decrease power into the eye

          the goal was to identify and test an alternative to current AR/VR/MR designs
          i hope to make more progress in the future!

          here is a link to the presentation i made for it
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
          {
            <a href="https://docs.google.com/presentation/d/1Hq2x0hZfLBl_PrwBWz_tflsaa60aI4YXy2t5TbkMhCA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
              vrd presentation
            </a>
          }
      </div>

      {/* Photos */}
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'clamp(45rem, 112vw, 70rem)', paddingBottom: '2rem'}}>
        <img src={vrdPic} style={style_ipp_ph} alt="vrd" />
      </div>

    </div>
  );
}

export default VRD