// Listed are all text styles/formats used

// Background
  // All Pages
  export const style_background = {
    backgroundColor: '#4f4f4f',
    minHeight: '100dvh',
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


// Middle Text
  // Home Page (Affects More About Me Page)
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
  export const stylet_middle_mam = {
    ... stylet_middle_home,
    fontSize: 'clamp(0.57rem, 1.5vw, 1.25rem)',
    lineHeight: 'clamp(0.2rem, 0.65vw, 1.5rem)',
    // marginTop: 'clamp(-35rem, 45rem - 50vw, 10rem)',
    // // marginTop: '-35rem',
    // // marginTop: '10rem',
    marginTop: 'clamp(4.5rem, 3vh + 5vw, 11rem)',
    // marginBottom: '3rem',
    // top: 'clamp(4.5rem, 13rem - 5vw, 13rem)',
    position: 'relative'
  };


// Photos
  // More About Me Page
  export const styleph = {  
    position: 'absolute',
    width: '450px',
    height: 'auto',
    margin: '1rem 0',
  };


// Headers
  // Header for project and more about me page
  export const stylet_header_mp = { 
    position: 'absolute',
    top: '5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'white',
    fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
    textAlign: 'center'
  };
  // Header for each project page
  export const stylet_header = { 
    position: 'absolute',
    marginTop: '3rem',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'white',
    fontSize: 'clamp(0.75rem, 2.5vw, 2.25rem)',
    textAlign: 'center',
    width: '100vw'
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
    fontSize: 'clamp(0.5rem, 2.5vw, 1.75rem',
    listStyleType: 'none',
    padding: '0',
  }