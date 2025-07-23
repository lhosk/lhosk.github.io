import {style_background, stylet_header} from '../styles';
import NavBar from '../NavBar';

function VRD() {

  return (
    <div style={style_background}>
      <NavBar />
      
      <div style={{...stylet_header, top: '8rem'}}>
        {`Virtual Retinal Display`}
      </div>

    </div>
  );
}

export default VRD