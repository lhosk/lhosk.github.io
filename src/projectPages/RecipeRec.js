import {style_background, style_ipp_h, style_ipp_mt} from '../styles';
import NavBar from '../NavBar';

function RecipeRec() {

  return (
    <div style={style_background}>
      
      <NavBar />

      {/* Title and Link */}
      <div style={{...style_ipp_h, top: '8rem'}}>          
        <a
          href="https://github.com/lhosk/Text-Mining-and-Info-Retrieval/blob/main/recipe_recommendation.ipynb" 
          target="_blank" rel="noopener noreferrer" style={{color: 'white'}}
        >
          Recipe Recommendation
        </a>
      </div>

      {/* Main Text */}

    </div>
  );
}

export default RecipeRec