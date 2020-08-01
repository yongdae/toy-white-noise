import _ from "lodash";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import DonutLargeRoundedIcon from "@material-ui/icons/DonutLargeRounded";

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: "#000000e8",
    backgroundColor: theme.palette.common.white,
    boxShadow: "0 4px 10px rgba(136, 152, 170, 0.15)"

  },
  offset: theme.mixins.toolbar,
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    fontSize: 16
  },
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1
  },
  menuIconButton: {
    width: 24,
    height: 24,

    cursor: "pointer",
    backgroundImage: "url('/images/main/menu-button.png')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  },
  appIcon: {
    display: "inline-block",

    width: 24,
    height: 24,

    marginRight: theme.spacing(1),

    backgroundImage: "url('/images/main/appIcon.png')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  },
  sidebar: {
    minWidth: 240,
    maxWidth: 500
  },
  divider: {
    marginBottom: theme.spacing(2)
  }
}));

function NavBar(props) {
  const classes = useStyles();

  const {
    onTypeClick = () => {
    }
  } = props;

  const sideRef = React.createRef();
  const [sidebar, setSidebar] = React.useState(false);

  const toggleSidebar = (open, type) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setSidebar(open);

    if (_.isEmpty(type))
      return;

    onTypeClick(event, type);
  };

  return (
    <div>
      <AppBar className={classes.appBar} elevation={0} position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            <div className={classes.menuIconButton} onClick={toggleSidebar(!sidebar)}/>
          </div>
          <Link variant="h6" underline="none" color="inherit" className={classes.title} href="/white-noise">
            <div className={classes.appIcon}/>
            {"백 색 소 음"}
          </Link>
          <div className={classes.right}/>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}/>
      <SwipeableDrawer
        ref={sideRef}
        anchor="left"
        open={sidebar}
        onClose={toggleSidebar(false)}
        onOpen={toggleSidebar(true)}
      >
        <div
          onKeyDown={toggleSidebar(false)}
        >
          <List className={classes.sidebar}>
            <ListItem button onClick={toggleSidebar(false)}>
              <ListItemIcon><CloseRoundedIcon/></ListItemIcon>
              <ListItemText primary={"목록"}/>
            </ListItem>
            <Divider className={classes.divider} variant="middle"/>
            <ListItem button onClick={toggleSidebar(false, 'noise')}>
              <ListItemIcon><DonutLargeRoundedIcon/></ListItemIcon>
              <ListItemText primary="백색소음"/>
            </ListItem>
            <ListItem button onClick={toggleSidebar(false, 'vacuum')}>
              <ListItemIcon><DonutLargeRoundedIcon/></ListItemIcon>
              <ListItemText primary="청소기"/>
            </ListItem>
            <ListItem button onClick={toggleSidebar(false, 'dry')}>
              <ListItemIcon><DonutLargeRoundedIcon/></ListItemIcon>
              <ListItemText primary="드라이기"/>
            </ListItem>
            <ListItem button onClick={toggleSidebar(false, 'sea')}>
              <ListItemIcon><DonutLargeRoundedIcon/></ListItemIcon>
              <ListItemText primary="파도"/>
            </ListItem>
            <ListItem button onClick={toggleSidebar(false, 'rain')}>
              <ListItemIcon><DonutLargeRoundedIcon/></ListItemIcon>
              <ListItemText primary="비"/>
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default NavBar;
