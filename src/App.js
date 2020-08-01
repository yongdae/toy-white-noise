import classNames from "classnames";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Footer, MediaButton, NavBar, Ocean, Start } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%"
  }
}));

function App() {
  const classes = useStyles();

  const [start, setStart] = React.useState(true);
  const [play, setPlay] = React.useState(false);

  return (
    <div className={classes.root}>
      {start && <Start onStartClick={() => setStart(false)}/>}
      {!start &&
      <>
        <NavBar/>
        <MediaButton play={play} onClick={() => setPlay(!play)}/>
        <Footer/>
        <Ocean/>
      </>
      }
    </div>
  );
}

export default App;
