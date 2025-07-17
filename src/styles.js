// Listed are all text styles/formats used

export const style_background = {  // background
  backgroundColor: '#000',
  color: '#fff',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const stylet_links = { //text for links
  fontSize: '1.2rem',
  color: '#fff',
  position: 'absolute',
  top: '1rem',
  whiteSpace: 'pre-line',
  lineHeight: '1.8rem'
};

export const stylet_top_right = { // top right links
  ...stylet_links,
  right: '1.5rem',
  textAlign: 'right',
};

export const stylet_top_left = { // top left links
  ...stylet_links,
  left: '1.5rem',
  textAlign: 'left',
};

export const stylet_middle = { // text in middle of home page
  position: 'absolute',
  whiteSpace: 'pre-line', 
  textAlign: 'center',
  left: '50%',
  transform: 'translateX(-50%)',
  top: '20%',
  fontSize: '1.5rem', 
  lineHeight: '2.5rem'
};

export const stylet_header = { // header for page about me
  position: 'absolute',
  top: '5rem',
  left: '50%',
  transform: 'translateX(-50%)',
  color: '#fff',
  fontSize: '1.7rem',
  textAlign: 'center'
};

export const styleph = {  // photos in the page about me
  position: 'absolute',
  width: '450px',
  height: 'auto',
  margin: '1rem 0',
};