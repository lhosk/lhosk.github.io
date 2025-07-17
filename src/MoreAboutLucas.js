import NavBar from './NavBar';
import { style_background, stylet_middle } from './styles';

function MoreAboutLucas() {
  return (
    <div style={style_background}>
      <NavBar />
      <div style={stylet_middle}>
        {`more about lucas goes here!!!`}
      </div>
    </div>
  );
}

export default MoreAboutLucas;
