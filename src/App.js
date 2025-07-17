import {Routes, Route} from 'react-router-dom';

// Main Pages
import Home from './Home';
import MoreAboutLucas from './MoreAboutLucas';
import Projects from './Projects'

// Project Pages
import AtariRL from './projectPages/AtariRL';
import ConnectFour from './projectPages/ConnectFourAI';
import MatlabMCS from './projectPages/MatlabMCS';
import MCSAPF from './projectPages/mcsapf';
import RedLightGreenLight  from './projectPages/RedLightGreenLight';
import Parallel from './projectPages/parallel';
import RecipeRec from './projectPages/RecipeRec';
import VRD from './projectPages/vrd';

function App() {
  return (
    <Routes>

      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/more_about_lucas" element={<MoreAboutLucas />} />
      <Route path="/projects" element={<Projects />} />
      
      {/* Project Pages */}
      <Route path="/projects/atari_rl" element={<AtariRL />} />
      <Route path="/projects/connect_four" element={<ConnectFour />} />
      <Route path="/projects/mcs_matlab" element={<MatlabMCS />} />
      <Route path="/projects/mcsapf" element={<MCSAPF />} />
      <Route path="/projects/parallel" element={<Parallel />} />
      <Route path="/projects/recipe_rec" element={<RecipeRec />} />
      <Route path="/projects/red_light_green_light" element={<RedLightGreenLight />} />
      <Route path="/projects/vrd" element={<VRD />} />
      
    </Routes>
  );
}

export default App;