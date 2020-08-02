import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    "&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.8)"
    }
  }
}));

const ShowAnimationButton = (props) => {
  const classes = useStyles();

  const {
    showGif = false, onClick = () => {
    }
  } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <Button className={classes.button} variant="outlined" onClick={onClick}>
        {!showGif && "움직이는 그림 켜기"}
        {showGif && "움직이는 그림 끄기"}
      </Button>
    </div>
  );
};

export default ShowAnimationButton;