import React from "react"
import { ParallaxBanner } from 'react-scroll-parallax';
import { withStyles, Typography, Grid } from '@material-ui/core';

const styles = {
  container: {
    position: 'relative',
    textAlign: 'center',
  },
  title: {
    marginTop: '32vh',
    color: 'white',
    letterSpacing: 4,
  }
}

const ParallaxDivider = ({ classes, image, title }) => (

  <ParallaxBanner
    className={classes.banner}
    layers={[
      {
        image,
        amount: 0.4,
        slowerScrollRate: true,
      }
    ]}
    style={{
      height: '70vh',
    }}
  >
    <Grid
      container
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        xs={12}
        className={classes.container}
      >
        <Typography variant="display1" className={classes.title}>{title.toUpperCase()}</Typography>
      </Grid>
    </Grid>
  </ParallaxBanner>
  // <div className={classes.titleContainer}>
  // </div>
)

export default withStyles(styles)(ParallaxDivider);