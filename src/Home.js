import {style_background, style_home_mt} from './styles';
import NavBar from './NavBar';

function Home() {
  return (

    <div style={style_background}>
      
      <NavBar />

      <div style={style_home_mt} className="home-text">
        {[
          "hey! i'm lucas",
          "i do computational physics",
          "i'm working on a master's in cs and physics",
          "my current project is reinforcement learning on F1 tracks",
          "my next project will be optimizing soccer formations/positions",
          "check out the links in the top right!"
        ].map((line, i) => (
          <p key={i} style={{ margin: 0 }}>{line}</p>
        ))}
      </div>

    </div>
  );
}

export default Home;