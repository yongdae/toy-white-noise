import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: 10,

    padding: `0 ${theme.spacing(1)}px`,

    lineHeight: 1.8,
    color: theme.palette.common.white
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      Presented by Yondae Kwon&nbsp;
      {new Date().getFullYear()}
    </div>
  );
}

export default Footer;
