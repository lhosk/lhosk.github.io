import {style_background, stylet_middle} from './styles';
import NavBar from './NavBar';

function Home() {
  return (

    <div style={style_background}>
      
      <NavBar />

      <div style={stylet_middle}>
        {`hey! i'm lucas
        i do computational physics
        i'm working on a master's in cs and physics
        my current project is reinforcement learning on F1 tracks
        my next project will be optimizing soccer formations/positioning`}
      </div>

    </div>
  );
}


export default Home;