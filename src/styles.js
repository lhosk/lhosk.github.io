// Backgrounds + Headers + NavBar (not page specific stuff)
  // Background (background)
    // More About Me Page (map) (affects all other backgrounds seen below)
    export const style_map_background = {
      backgroundColor: '#4f4f4f',
      minHeight: '100dvh'
    }
    // All other Pages
    export const style_background = {
      ... style_map_background,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };


  // Headers (header)
    // Project and More About Me page (multiple pages get no initial as of now)
    export const style_header = { 
      position: 'absolute',
      top: '5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'white',
      fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
      textAlign: 'center'
    };


  // NavBar (nb) (links in the corners of pages)
    // Links Text (lt)
    const style_nb_lt = { 
      fontSize: '1.5rem',
      color: 'white',
      position: 'absolute',
      top: '1rem',
      whiteSpace: 'pre-line',
      lineHeight: '2.2rem',
      zIndex: 10
    };
    // Links top right (ltr)
    export const style_nb_ltr = { 
      ...style_nb_lt,
      right: '1.5rem',
      textAlign: 'right',
    };
    // Links top left (ltl)
    export const style_nb_ltl = {
      ...style_nb_lt,
      left: '1.5rem',
      textAlign: 'left',
    };

    

// Page Specific Stuff
  // Home Page (home)
    // Middle Text (mt)
    export const style_home_mt = {
      color: 'white',
      fontSize: 'clamp(1rem, 2vw, 2.25rem)',
      lineHeight: '3.25rem',
      overflow: 'hidden',
      textAlign: 'center',
      width: '100vw',
      maxWidth: '1100px'
    };
    

  // More About Me Page (map)
    // Middle Text (mt)
    export const style_map_mt = {
      color: 'white',
      textAlign: 'center',
      fontSize: 'clamp(0.47rem, 1.25vw, 1.2rem)',
      lineHeight: 'clamp(0.2rem, 0.65vw, 1.5rem)',
      marginTop: '10rem',
      position: 'relative',
      whiteSpace: 'pre'
    };
    // Photos (ph)
    export const style_map_ph = {  
      position: 'absolute',
      width: '450px',
      height: 'auto',
      margin: '1rem 0',
    };


  // Projects Page (pp)
    // Gap for each link (link_gap)
    export const style_pp_link_gap = {
      color: 'white', 
      display: 'block', 
      marginBottom: '2rem'
    }
    // Links Text (lt)
    export const style_pp_lt = {
      color: 'white',
      textAlign: 'center',
      fontSize: 'clamp(0.5rem, 2.5vw, 1.75rem)',
      listStyleType: 'none',
    }


  // Individual Project Pages (ipp)
    // Header (h)
    export const style_ipp_h = { 
      position: 'absolute',
      color: 'white',
      fontSize: 'clamp(0.75rem, 2.5vw, 2.25rem)',
      textAlign: 'center',
      width: '100vw'
    };
    // Middle Text (mt)
    export const style_ipp_mt = {
      color: 'white',
      textAlign: 'center',
      fontSize: 'clamp(0.57rem, 1.25vw, 1.2rem)',
      lineHeight: 'clamp(0.2rem, 0.65vw, 1.5rem)',
      marginTop: '10rem',
      whiteSpace: 'pre-wrap',
      position: 'absolute', 
      top: 'clamp(2rem, 10vh - 5vw, 8rem)'
    }
    // Photos (ph)
    export const style_ipp_ph = {  
      position: 'relative',
      width: 'clamp(200px, 60vw, 450px)',
      height: 'auto',
    };