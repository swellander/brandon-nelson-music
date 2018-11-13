import React from "react"
import { Toolbar, IconButton, AppBar, Typography, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby';
import HamMenu from './HamMenu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  bar: {
    background: 'transparent',
    boxShadow: 'none',
    color: 'black',
  },
  title: {
    flexGrow: 1,
    fontSize: 20,
    letterSpacing: 4,
  },
  transparent: {
    opacity: 0,
    flexGrow: 1,
    fontSize: 20,
    letterSpacing: 4,
  },
  white: {
    position: 'absolute',
    background: 'transparent',
    boxShadow: 'none',
    color: 'white',
  },
  menuButton: {
    float: 'right'
  }
};

const Header = ({ classes, splash }) => (
  <div>
    <AppBar className={splash ? classes.white : classes.bar} position="static">
      <Toolbar>
        <Typography to="/" component={Link} color="inherit" className={splash ? classes.transparent : classes.title}>
          BRANDON NELSON
        </Typography>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon fontSize="large" />
        </IconButton>
        {/* <HamMenu /> */}
      </Toolbar>
    </AppBar>
  </div>
)

export default withStyles(styles)(Header);

