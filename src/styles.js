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
  whiteSpace: 'pre-line', 
  textAlign: 'center', 
  fontSize: '1.5rem', 
  lineHeight: '2.5rem'
};