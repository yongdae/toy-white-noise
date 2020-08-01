import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',

    backgroundImage: 'url("/images/start/background.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  content: {
    maxWidth: 375,
    height: `calc(100% - ${theme.spacing(18) + 80}px)`,

    margin: 'auto',
    paddingTop: theme.spacing(16),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  appIcon: {
    width: 194,
    height: 194,

    margin: 'auto',

    backgroundImage: 'url("/images/start/appIcon.png")',
    backgroundRepeat: 'no-repeat',
  },
  appTitle: {
    marginTop: theme.spacing(8),

    lineHeight: 1,
    fontSize: 48,
    fontWeight: 'bold',
    color: theme.palette.common.white,
  },
  presentBy: {
    marginTop: theme.spacing(2),

    color: theme.palette.common.white
  },
  buttons: {
    maxWidth: 375,
    height: 80,

    margin: 'auto',
    paddingTop: theme.spacing(2),

    textAlign: 'center',
  },
  startButton: {
    width: '80%',
    minWidth: 120,

    backgroundColor: theme.palette.common.white,
  },
}));

const Start = (props) => {
  const classes = useStyles();

  const { onStartClick = () => {} } = props;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.appIcon}/>
        <div>
          <Typography className={classes.appTitle}>
            백색<br/>
            소음
          </Typography>
          <Typography className={classes.presentBy}>Presented by Yongdae</Typography>
        </div>
      </div>
      <div className={classes.buttons}>
        <Button className={classes.startButton} variant="contained" onClick={onStartClick}>
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default Start;
