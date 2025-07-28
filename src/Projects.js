import NavBar from './NavBar';
import {style_background, style_pp_lt, style_pp_link_gap, style_header} from './styles';
import {Link} from 'react-router-dom';


function Projects() {

  return (
    <div style={style_background}>
      
      <NavBar />
      
      <div style={style_header}>
        {`projects`}
      </div>

      {/* Listing All Projects Below */}
      <div style={{marginTop: '8rem'}}>

        <ul style={style_pp_lt}>
          
          <li>
              <Link to="/projects/atari_rl" style = {style_pp_link_gap}>
              Reinforcement Learning Using Atari</Link>

              <Link to="/projects/connect_four" style = {style_pp_link_gap}>
              Connect Four with MiniMax and AB Pruning </Link>

              <Link to="/projects/mcs_matlab" style = {style_pp_link_gap}>
              MATLAB: Monte Carlo Simulation to Predict Size of Circles and Spheres</Link>

              <Link to="/projects/mcsapf" style = {style_pp_link_gap}>
              Arduino: Monte Carlo Simulation for Atomic Packing Factors</Link>

              <Link to="/projects/parallel" style = {style_pp_link_gap}>
              Parallel Computing on an HPC Using Pthreads and openMP</Link>

              <Link to="/projects/recipe_rec" style = {style_pp_link_gap}>
              Recipe Recommendation Using NLP</Link>

              <Link to="/projects/red_light_green_light" style = {style_pp_link_gap}>
              Arduino: Red Light Green Light</Link>

              <Link to="/projects/vrd" style = {style_pp_link_gap}>
              Virtual Retinal Display</Link>

          </li>

        </ul>

      </div>
    </div>
  );
}

export default Projects;