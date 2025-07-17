import NavBar from './NavBar';
import {style_background, stylet_header, stylet_project_links, stylet_link_separation} from './styles';
import {Link} from 'react-router-dom';


function Projects() {

  return (
    <div style={{...style_background}}>
      <NavBar />
      
      <div style={stylet_header}>
        {`projects`}
      </div>

      {/* Listing All Projects Below */}
      <ul style={stylet_project_links}>
        
        <li>
            <Link to="/projects/atari_rl" style = {stylet_link_separation}>
            Reinforcement Learning Using Atari</Link>

            <Link to="/projects/connect_four" style = {stylet_link_separation}>
            Connect Four with MiniMax and AB Pruning </Link>

            <Link to="/projects/mcs_matlab" style = {stylet_link_separation}>
            Matlab: Monte Carlo Simulation to Predict Size of Circles and Spheres</Link>

            <Link to="/projects/mcsapf" style = {stylet_link_separation}>
            Arduino: Monte Carlo Simulation for Atomic Packing Factors</Link>

            <Link to="/projects/parallel" style = {stylet_link_separation}>
            Parallel Computing on an HPC Using Pthreads and openMP</Link>

            <Link to="/projects/recipe_rec" style = {stylet_link_separation}>
            Recipe Recommendation Using NLP</Link>

            <Link to="/projects/red_light_green_light" style = {stylet_link_separation}>
            Arduino: Red Light Green Light</Link>

            <Link to="/projects/vrd" style = {stylet_link_separation}>
            Virtual Retinal Display</Link>

        </li>

      </ul>


    </div>
  );
}

export default Projects;