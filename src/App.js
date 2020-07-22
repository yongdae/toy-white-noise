import React from 'react';
import { Footer, NavBar, Ocean } from './components';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <PlayArrowRoundedIcon />
      </div>
      <Footer />
      <Ocean />
    </div>
  );
}

export default App;
