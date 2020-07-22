import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',

    width: '100%',
    height: '5%',

    top: '64px',
    left: 0,
    background: '#eef9bf',
  },

  wave: {
    position: 'absolute',
    top: 0,
    zIndex: 10,

    width: '5760px',
    height: '320px',

    transform: 'translate3d(0, 0, 0)',
    '&:nth-of-type(1)': {
      zIndex: 1,

      background: 'url(/images/wave/wave1.svg) repeat-x',
      animation: '$wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
    },
    '&:nth-of-type(2)': {
      top: '10px',
      zIndex: 3,

      background: 'url(/images/wave/wave2.svg) repeat-x',
      animation: '$wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite, $swell1 7s ease -1.25s infinite',
    },
    '&:nth-of-type(3)': {
      zIndex: 2,

      background: 'url(/images/wave/wave3.svg) repeat-x',
      animation: '$wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite, $swell2 7s ease 0s infinite',
    },
  },

  '@keyframes wave': {
    '0%': {
      marginLeft: 0,
    },
    '100%': {
      marginLeft: '-1440px',
    },
  },

  '@keyframes swell1': {
    '0%, 100%': {
      transform: 'translate3d(0, -25px, 0)',
    },
    '50%': {
      transform: 'translate3d(0, 5px, 0)',
    },
  },

  '@keyframes swell2': {
    '0%, 100%': {
      transform: 'translate3d(0, -10px, 0)',
    },
    '50%': {
      transform: 'translate3d(0, 10px, 0)',
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
