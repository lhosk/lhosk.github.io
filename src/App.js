import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import MoreAboutLucas from './MoreAboutLucas';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/more_about_lucas" element={<MoreAboutLucas />} />
      {/* later add: <Route path="/projects" element={<Projects />} /> */}
    </Routes>
  );
}

export default App;