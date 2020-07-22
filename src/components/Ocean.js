import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',

    width: '100%',

    bottom: 0,
    left: 0,
  },

  wave: {
    position: 'absolute',
    bottom: 0,
    zIndex: 10,

    width: '6400px',
    height: '198px',

    transform: 'translate3d(0, 0, 0)',
    '&:nth-of-type(1)': {
      zIndex: 2,

      background: 'url(./images/wave/wave1.svg) repeat-x',
      animation: '$wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
    },
    '&:nth-of-type(2)': {
      bottom: '10px',
      zIndex: 3,

      background: 'url(./images/wave/wave2.svg) repeat-x',
      animation: '$wave 7.5s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite, $swell1 7.5s ease -0.5s infinite',
    },
    '&:nth-of-type(3)': {
      zIndex: 1,

      background: 'url(./images/wave/wave3.svg) repeat-x',
      animation: '$wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite, $swell2 8s ease -1s infinite',
    },
  },

  '@keyframes wave': {
    '0%': {
      marginLeft: 0,
    },
    '100%': {
      marginLeft: '-1600px',
    },
  },

  '@keyframes swell1': {
    '0%, 100%': {
      opacity: 0.5,
      transform: 'translate3d(0, 25px, 0)',
    },
    '50%': {
      opacity: 0.8,
      transform: 'translate3d(0, 10px, 0)',
    },
  },

  '@keyframes swell2': {
    '0%, 100%': {
      opacity: 0.3,
      transform: 'translate3d(0, 10px, 0)',
    },
    '50%': {
      opacity: 0.5,
      transform: 'translate3d(0, 0, 0)',
    },
  },
}));

const Ocean = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wave} />
      <div className={classes.wave} />
      <div className={classes.wave} />
    </div>
  );
};

export default Ocean;
