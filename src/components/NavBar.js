import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black,
  },
  title: {
    fontSize: 24,
  },
  placeholder: {
    height: 64,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} elevation={0} position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link variant="h6" underline="none" color="inherit" className={classes.title} href="/">
            백색 소음
          </Link>
          <div className={classes.right} />
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default NavBar;
