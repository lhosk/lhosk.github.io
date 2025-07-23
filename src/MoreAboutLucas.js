import NavBar from './NavBar';
import { style_background, stylet_header_mp, stylet_middle_mam, styleph } from './styles';
import { catPic, dogPic, soccerPic, beachPic } from './images';

function MoreAboutLucas() {
  return (
    <div style={{...style_background, display: 'flex', justifyContent: 'center'}}>
      <NavBar />

      <div style={stylet_header_mp}>
        more about lucas!!!
      </div>

      {/* Left side */}
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <img src={catPic} style={{ ...styleph, marginTop: '10rem', marginLeft: '2rem' }} alt="Cat" />
        <img src={dogPic} style={{ ...styleph, marginTop: '3rem', marginLeft: '2rem' }} alt="Dog" />
      </div>

      {/* Right side */}
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <img src={soccerPic} style={{ ...styleph, marginTop: '10rem', marginRight: '2rem' }} alt="Soccer" />
        <img src={beachPic} style={{ ...styleph, marginTop: '3rem', marginRight: '2rem' }} alt="Beach" />
      </div>

      {/* Text content */}
      <div style={stylet_middle_mam}>
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
    </div>
  );
}

export default MoreAboutLucas;
