import {style_background, stylet_header} from '../styles';
import NavBar from '../NavBar';

function RecipeRec() {

  return (
    <div style={{...style_background}}>
      <NavBar />
      
      <div style={{...stylet_header, top: '8rem'}}>
        {`Recipe Recommendation Using NLP`}
      </div>

    </div>
  );
}

export default RecipeRec