import classNames from "classnames";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { AnimationBackground, Footer, PlayButton, NavBar, Ocean, Start, Player } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%"
  },
  showGifButton: {
    margin: theme.spacing(2),
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    '&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }
  }
}));

function App() {
  const classes = useStyles();

  const [start, setStart] = React.useState(true);
  const [play, setPlay] = React.useState(false);
  const [type, setType] = React.useState("noise");
  const [showGif, setShowGif] = React.useState(false);

  return (
    <div className={classes.root}>
      {start && <Start onStartClick={() => setStart(false)}/>}
      {!start &&
      <>
        <NavBar onTypeClick={(e, selectType) => setType(selectType)}/>
        <div style={{ position: "absolute", zIndex: 100, width: "100%" }}>
          <div style={{ textAlign: "center" }}>
            <Button className={classes.showGifButton} variant="outlined" onClick={() => setShowGif(!showGif)}>
              {!showGif && "움직이는 그림 켜기"}
              {showGif && "움직이는 그림 끄기"}
            </Button>
          </div>
          <PlayButton playing={play} onClick={() => setPlay(!play)}/>
          <Player type={type} play={play}/>
        </div>
        <Footer/>
        {
          !showGif && <Ocean/>
        }
        {
          showGif && <AnimationBackground type={type}/>
        }
      </>
      }
    </div>
  );
}

export default App;
