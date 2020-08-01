import classNames from "classnames";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: 120,
    height: 120,

    marginTop: "20vh",
    marginRight: "auto",
    marginLeft: "auto",

    cursor: 'pointer',
    backgroundImage: "url('/images/main/play-button1.png')",
    backgroundSize: "contain"
  },
  active: {
    backgroundImage: "url('/images/main/stop-button1.png')"
  }
}));

const PlayButton = (props) => {
  const classes = useStyles();

  const {
    playing, onClick = () => {
    }
  } = props;

  return (
    <div className={classNames({ [classes.button]: true, [classes.active]: playing })}
         onClick={onClick}/>
  );
};

export default PlayButton;