import React from 'react';
import { Footer, Ocean, NavBar } from './components';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    height: '100%',
    // background: 'radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%)',
    overflow: 'hidden',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <NavBar />
      <Ocean />
      <Footer />
    </div>
  );
}

export default App;
