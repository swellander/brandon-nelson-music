import React from "react"
import { Grid, Toolbar, IconButton, AppBar, Typography, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby';
import { SocialIcon } from 'react-social-icons';

const styles = {
  container: {
    height: '200px',
    width: '100vw',
    backgroundColor: '#1f1f1f',
  },
  innnerContainer: {
    textAlign: 'center'
  },
  icon: {
    fontSize: '1em'
  },
};

const Footer = ({ classes, splash }) => (
  <Grid className={classes.container} container justify="center" alignItems="center">
    <Grid container item xs={12} justify="center" className={classes.innnerContainer}>
      <IconButton className={classes.iconBtn}>
        <SocialIcon url='https://www.facebook.com/Brandon.Loves.Pie' className={classes.icon} color="white" />
      </IconButton>
      <IconButton>
        <SocialIcon url='https://soundcloud.com/brandon-nelson-75' className={classes.icon} color="white" />
      </IconButton>
      <IconButton>
        <SocialIcon url='https://www.instagram.com/' className={classes.icon} color="white" />
      </IconButton>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Footer);

