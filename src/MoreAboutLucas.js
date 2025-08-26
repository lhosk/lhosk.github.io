import NavBar from './NavBar';
import {style_map_background, style_header, style_map_mt, style_map_ph} from './styles';
import {catPic, dogPic, soccerPic, beachPic} from './images';
import {useState, useEffect} from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

function MoreAboutLucas() {
  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const isWide = useMediaQuery('(min-width: 1600px)');
  const isNarrow = useMediaQuery('(max-width: 1599px)');

  return (
    <div style={{ ...style_map_background, display: 'flex', flexDirection: 'column' }}>
      
      <NavBar />

      {/* Header */}
      <div style={style_header}>
        more about lucas!!!
      </div>

      {/* Images for wide screen */}
      {isWide && (
        <div style={{ position: 'absolute', display: 'flex', minHeight: '100vh'}}>
          <img src={catPic} style={{ ...style_map_ph, top: '8rem', marginLeft: '7vw'}} alt="Cat" />
          <img src={soccerPic} style={{ ...style_map_ph, top: '8rem', marginLeft: '93vw', translate: '-100%'}} alt="Soccer" />
          <img src={dogPic} style={{ ...style_map_ph, top: '48rem', marginLeft: '7vw'}} alt="Dog" />
          <img src={beachPic} style={{ ...style_map_ph, top: '47rem', marginLeft: '93vw', translate: '-100%', marginBottom: '2rem'}} alt="Beach" />
        </div>
      )}

      {/* main text */}
      <div style={style_map_mt}>
        {`
          at the moment, i'm getting a masters in CS and another in (applied) physics
          i should be done with both by December 2025!

          because of this, i live in charlotte (@uncc) during the semesters
          then in the summers, i live in Raleigh
          because of my location, it's easy to go to the beach and the mountains year round

          i recently got a cat (Laz) and have had a dog (Pepper)
          unfortunately, they don't get along very well

          during my free time, i play soccer, billiards, and also a few guitars
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
      </div>

      {/* Images for small screen */}
      {isNarrow && (
        <div style={{marginTop: '3.25rem', marginBottom: '3rem', textAlign: 'center'}}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem'}}>
            <img src={catPic} style={{width: '45vw', maxWidth: '400px'}} alt="Cat" />
            <img src={soccerPic} style={{width: '45vw', maxWidth: '400px'}} alt="Soccer" />
          </div>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', marginBottom: '1.5rem'}}>
            <img src={dogPic} style={{width: '45vw', maxWidth: '400px'}} alt="Dog" />
            <img src={beachPic} style={{width: '45vw', maxWidth: '400px'}} alt="Beach" />
          </div>
        </div>
      )}
      
    </div>
  );
}

export default MoreAboutLucas;
