import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import { Footer, NavBar, Ocean } from './components';

const useStyles = makeStyles((theme) => ({
  buttonWrap: {
    marginTop: '40%',
    textAlign: 'center',
  },
  button: {
    width: '40vw',
    height: '40vw',

    border: '8px solid #424242',
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
  },
}));

function App() {
  const classes = useStyles();

  const [play, setPlay] = React.useState(false);

  return (
    <div>
      <NavBar />
      {!play && (
        <div className={classes.buttonWrap} onClick={() => setPlay(!play)}>
          <PlayArrowRoundedIcon className={classes.button} />
        </div>
      )}
      {play && (
        <div className={classes.buttonWrap} onClick={() => setPlay(!play)}>
          <StopRoundedIcon className={classes.button} />
        </div>
      )}
      <Footer />
      <Ocean />
    </div>
  );
}

export default App;
