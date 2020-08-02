import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  AnimationBackground,
  Footer,
  NavBar,
  Ocean,
  PlayButton,
  Player,
  ShowAnimationButton,
  Start
} from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%"
  },
  content: {
    position: "absolute",
    zIndex: 100,

    width: "100%"
  },
  showGifButton: {
    margin: theme.spacing(2),
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    "&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.8)"
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
        <div className={classes.content}>
          <ShowAnimationButton showGif={showGif} onClick={() => setShowGif(!showGif)}/>
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
