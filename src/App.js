import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import { Footer, NavBar, Ocean, Start } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  buttonWrap: {
    marginTop: '40%',
    textAlign: 'center',

    '@media screen and (min-width:768px)': {
      marginTop: '160px',
    },
  },
  button: {
    width: '40vw',
    height: '40vw',
    maxWidth: '240px',
    maxHeight: '240px',

    border: '8px solid #424242',
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
  },

  background: {
    width: '100%',
    height: '300px',
    backgroundImage: 'url(/images/background/rain.gif)',
  },
}));

function App() {
  const classes = useStyles();

  const [start, setStart] = React.useState(true);
  const [play, setPlay] = React.useState(false);

  return (
    <div className={classes.root}>
      {start && <Start onStartClick={() => setStart(false)} />}
      {/*<div className={classes.background}>*/}
      {/*  <NavBar/>*/}
      {/*  {!play && (*/}
      {/*    <div className={classes.buttonWrap} onClick={() => setPlay(!play)}>*/}
      {/*      <PlayArrowRoundedIcon className={classes.button}/>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*  {play && (*/}
      {/*    <div className={classes.buttonWrap} onClick={() => setPlay(!play)}>*/}
      {/*      <StopRoundedIcon className={classes.button}/>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*  <Footer/>*/}
      {/*  <Ocean/>*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
