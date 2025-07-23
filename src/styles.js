// Listed are all text styles/formats used

export const style_background = {  // background
  backgroundColor: '#4f4f4f',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const stylet_links = { //text for links
  fontSize: '1.5rem',
  color: 'white',
  position: 'absolute',
  top: '1rem',
  whiteSpace: 'pre-line',
  lineHeight: '2.2rem'
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

export const stylet_middle_home = { // home page text
  color: 'white',
  fontSize: 'clamp(1rem, 2vw, 2.25rem)',
  lineHeight: '3.25rem',
  overflow: 'hidden',
  textAlign: 'center',
  width: '100vw',
  maxWidth: '1100px'
};

export const stylet_middle_mam = { // more about me page text
  ... stylet_middle_home,
  fontSize: 'clamp(0.62rem, 1.5vw, 1.25rem)',
  lineHeight: 'clamp(0.2rem, 0.65vw, 1.5rem)',
  top: 'clamp(4.5rem, 11.5rem - 5vw, 12rem)',
  // top: '10.5rem',
  position: 'relative'
};

export const stylet_link_separation = { // to allow a gap for each link
  color: 'white', 
  display: 'block', 
  marginBottom: '0.5rem'
}

export const stylet_project_links = { // project links on projects page
  ...stylet_middle_home,
  fontSize: '1.5rem',
  listStyleType: 'none'
}

export const stylet_header = { // header for page about me
  position: 'absolute',
  top: '5rem',
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'white',
  fontSize: '2.25rem',
  textAlign: 'center'
};

export const styleph = {  // photos in the page about me
  position: 'absolute',
  width: '450px',
  height: 'auto',
  margin: '1rem 0',
};