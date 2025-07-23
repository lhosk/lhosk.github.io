import {style_background, stylet_header} from '../styles';
import NavBar from '../NavBar';

function RedLightGreenLight() {

  return (
    <div style={style_background}>
      <NavBar />
      
      <div style={{...stylet_header, top: '8rem'}}>
        {`Arduino: Red Light Green Light Game`}
      </div>

    </div>
  );
}

export default RedLightGreenLight