import React from "react"
import { ParallaxBanner } from 'react-scroll-parallax';
import { withStyles, Typography } from '@material-ui/core';

const styles = {
  // banner: {
  //   height: '100vh'
  // }
}

const ParallaxDivider = ({ classes, image }) => (

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
      height: '100vh',
    }}
  >
    <Typography variant="display1" className={classes.title}>BRANDON NELSON</Typography>
  </ParallaxBanner>
  // <div className={classes.titleContainer}>
  // </div>
)

export default withStyles(styles)(ParallaxDivider);