import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <>
      Presented by Yondae Kwon&nbsp;
      {new Date().getFullYear()}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 10,

    margin: 0,
    padding: theme.spacing(1),

    color: theme.palette.grey[50]
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
