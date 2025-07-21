import NavBar from './NavBar';
import {style_background, stylet_header, stylet_middle, styleph} from './styles';
import {catPic, dogPic, soccerPic, beachPic} from './images';
import {useState, useEffect} from 'react';

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
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
    document.body.style.overflow = '';
    };
  }, []);



  const isWide = useMediaQuery('(min-width: 1850px)');

  return (
    <div style={{...style_background, paddingBottom: '40rem', overflow: 'hidden'}}>
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

      <div style={{...stylet_middle, fontSize: '1.2rem', lineHeight: '1.5rem', top: '32.5%'}}>
        {`
        at the moment, i'm getting a masters in CS and another in (applied) physics
        i should be done with both by December 2025!

        because of this, i live in charlotte (@uncc) during the semesters
        then in the summers, i live in Raleigh
        because of my location, it's easy to go to the beach and the mountains year round

        i recently got a cat (Laz) and have had a dog (Pepper)
        unfortunately, they don't get along very well

        during my free time, i play soccer, billiards, and have a few guitars that i play
        i also have a lap-steel guitar, but i'm not very good at it and the strings break a lot
        if you ever see me, i'm most likely listening to music
        Dominic Fike, Yeek, Baird, Bakar, and Matt Champion are my favorite artists
        
        my favorite soccer team is West Ham and I support Colombia's national team
        when i get the chance, i go to sports games (specifically soccer and hockey)
        with my current project, i'm trying to get into F1, but I haven't had much time to watch
        the same goes for tv shows, anime, and movies
        regardless, some of my favorite shows are Breaking Bad, The Bear, and The Eternaut
        I also recommend One Piece, Cowboy Bebop, and Samurai Champloo

        oh and my favorite color is gray (hence the background)
        email me to talk and work together! (top right)
        here's some photos:
        `}
      </div>

    </div>
  );
}

export default MoreAboutLucas;
