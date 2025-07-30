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
      <div style={{...style_ipp_mt, paddingBottom: '2rem'}}>
        {`
          tools: python, pandas, scikit-learn, jupyter notebook, nlp, tf-idf, 
          text preprocessing, recommendation systems, rag, openAI, huggingface

          this was the final project for my text mining and information retrieval class
          i found two different sets of data for recipes and made a recipe recommendation system

          let me start by saying this project was rushed because of finals week

          regardless, one of the first things i was taught in this class was preprocessing
          so i preprocessed all the text and the data

          then i used a few different methods such as embeddings and vectorizing the data
          through this, i was able to identify scores based on inputs

          there were two different inputs
          one of them is the ingredients the user has
          the other is the ingredients the user is allergic to
          i did this because i’m allergic to a lot of foods, so it’s helpful for me!

          scores are then calculated
          certain recipes are pushed out
          matching recipes are pushed up

          then the top three are pushed out using RAG to identify more features 
          such as missing ingredients, possible replacements, etc…

          here is the link to the presentation i did for the class:
        `
          .trim()
          .split('\n')
          .map((line, i) => (
            <p
              key={i}
              style={{
                margin: line.trim() === '' ? '0.5rem 0' : '0.3rem 0',
                lineHeight: '1.4',
              }}
            >
              {line.trim() === '' ? '\u00A0' : line.trim()}
            </p>
          ))}
          {
            <a href="https://docs.google.com/presentation/d/1PrhDDPfGbjxJWJB3EePf7-Ho8P5X4innB8WnUP4oZok/edit?slide=id.g355d0ab592b_0_0#slide=id.g355d0ab592b_0_0" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
              recipe recommondation presentation
            </a>
          }
      </div>

    </div>
  );
}

export default RecipeRec