// Listed are all text styles/formats used

// Background
  export const style_background = {
    backgroundColor: '#4f4f4f',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };


// NavBar (links in the corners of pages)
  // Links Text
  const stylet_links = { 
    fontSize: '1.5rem',
    color: 'white',
    position: 'absolute',
    top: '1rem',
    whiteSpace: 'pre-line',
    lineHeight: '2.2rem'
  };
  // Links top right
  export const stylet_top_right = { 
    ...stylet_links,
    right: '1.5rem',
    textAlign: 'right',
  };
  // Links top left
  export const stylet_top_left = {
    ...stylet_links,
    left: '1.5rem',
    textAlign: 'left',
  };


// Home page
  // Text (affects more about me middle text)
  export const stylet_middle_home = {
    color: 'white',
    fontSize: 'clamp(1rem, 2vw, 2.25rem)',
    lineHeight: '3.25rem',
    overflow: 'hidden',
    textAlign: 'center',
    width: '100vw',
    maxWidth: '1100px'
  };


// More About Me Page
  // Middle Text
  export const stylet_middle_mam = {
    ... stylet_middle_home,
    fontSize: 'clamp(0.62rem, 1.5vw, 1.25rem)',
    lineHeight: 'clamp(0.2rem, 0.65vw, 1.5rem)',
    top: 'clamp(4.5rem, 11.5rem - 5vw, 12rem)',
    position: 'relative'
  };

  // Photos
  export const styleph = {  
    position: 'absolute',
    width: '450px',
    height: 'auto',
    margin: '1rem 0',
  };

// Header for all projects, main project, and more about me pages
  // Header
  export const stylet_header = { 
    position: 'absolute',
    top: '5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'white',
    fontSize: '2.25rem',
    textAlign: 'center'
  };

// Projects Page
  // Gap for each link
  export const stylet_link_separation = {
    color: 'white', 
    display: 'block', 
    marginBottom: '2rem'
  }
  // Links Text
  export const stylet_project_links = {
    color: 'white',
    overflow: 'hidden',
    textAlign: 'center',
    fontSize: 'clamp(0.75rem, 2.5vw, 1.75rem',
    listStyleType: 'none',
    padding: '0',
  }