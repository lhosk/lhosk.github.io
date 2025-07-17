import NavBar from './NavBar';
import {style_background, stylet_header, stylet_middle, styleph } from './styles';
import {catPic, dogPic, soccerPic, beachPic} from './images';
import React, { useState, useEffect } from 'react';

// Used to delete the images whenever the screen is too small
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = e => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

function MoreAboutLucas() {

  const isWide = useMediaQuery('(min-width: 1800px)');

  return (
    <div style={style_background}>
      <NavBar />
      
      <div style={stylet_header}>
        {`more about lucas!!!`}
      </div>

      {isWide && (
        <>
          <img src={catPic}    style={{...styleph, top: '10rem',   left: '5%'}} />
          <img src={dogPic}    style={{...styleph, top: '51.5rem', left: '5%'}} />
          <img src={soccerPic} style={{...styleph, top: '10rem',   right: '5%'}} />
          <img src={beachPic}  style={{...styleph, top: '50rem',   right: '5%'}} />
        </>
       )}

      <div style={{...stylet_middle, fontSize: '1.2rem', lineHeight: '1.5rem'}}>
        {`
        at the moment, i'm getting a masters in CS and another in (applied) physics
        i should be done with both by December 2025!

        because of this, i live in charlotte (@uncc) during the semesters
        then in the summers, i live in Raleigh
        because of my location, it's easy to go to the beach and the mountains year round

        i recently got a cat (Laz) and have had a dog (Pepper)

        during my free time, i play soccer, billiards, and i have a few guitars that i play
        i also have a lap-steel guitar, but i'm not very good at it (the strings break a LOT)
        
        whenever i get the chance, i go to sports games (specifically soccer and hockey)
        `}
      </div>

    </div>
  );
}

export default MoreAboutLucas;
