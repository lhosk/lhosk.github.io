import './App.css';

const navLinks = [
  { label: 'lhoskin.work@gmail.com', href: 'mailto:lhoskin.work@gmail.com' },
  { label: 'more about me', href: '/more_about_lucas' },
  { label: 'projects', href: '/projects' },
  { label: 'github', href: 'https://github.com/lhosk', newTab: true }
];

const background_style = { 
  backgroundColor: '#000',
  color: '#fff',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const middle_text_style = {
  whiteSpace: 'pre-line', 
  textAlign: 'center', 
  fontSize: '1.5rem', 
  lineHeight: '2.5rem'
};

const top_right_text_style = {
  position: 'absolute',
  top: '1rem',
  right: '1.5rem',
  fontSize: '1.2rem',
  color: '#fff',
  textAlign: 'right',
  whiteSpace: 'pre-line',
  lineHeight: '1.8rem'
};


function App() {
  return (

    /*Background*/
    <div style={background_style}>

      {/*Top Right Text*/}
      <div style={top_right_text_style}>
        {navLinks.map(({ label, href, newTab }) => (
          <div key={label}>
            <a 
              href={href}
              // target={newTab ? '_blank' : '_self'}
              // rel={newTab ? 'noopener noreferrer' : undefined}
              style={{ color: '#fff', textDecoration: 'underline' }}
            >
              {label}
            </a>
          </div>
        ))}
      </div>
      
      {/*Middle Text*/}
      <div style={middle_text_style}>
        {`hey! i'm lucas
        i do computational physics
        i'm working on a master's in cs and physics
        my current project is reinforcement learning on F1 tracks
        my next project will be optimizing soccer formations/positioning`}
      </div>

    </div>
  );
}





export default App;