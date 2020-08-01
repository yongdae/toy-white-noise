import classNames from "classnames";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  gif: {
    width: "100%",
    height: "calc(100% - 56px)",

    backgroundImage: "url('/sounds/noise.gif')",
    backgroundSize: "cover",

    "@media screen and (min-width:768px)": {
      height: "calc(100% - 64px)"
    }
  },
  dry: {
    backgroundImage: "url('/sounds/dry.gif')"
  },
  noise: {
    backgroundImage: "url('/sounds/noise.gif')"
  },
  rain: {
    backgroundImage: "url('/sounds/rain.gif')"
  },
  sea: {
    backgroundImage: "url('/sounds/sea.gif')"
  },
  vacuum: {
    backgroundImage: "url('/sounds/vacuum.gif')"
  }
}));

const AnimationBackground = (props) => {
  const classes = useStyles();

  const { type } = props;

  return (
    <div className={classNames({ [classes.gif]: true, [classes[type]]: true })}/>
  );
};

export default AnimationBackground;