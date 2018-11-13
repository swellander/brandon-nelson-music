import React, { Fragment, Component } from "react"
import { Typography, withStyles, Grid, } from '@material-ui/core';
import ParallaxDivider from "./ParallaxDivider";
import performancesImg from './quick.jpg';
import Instafeed from 'instafeed.js';
import PhotoGrid from "./PhotoGrid";

const styles = {
  container: {
    height: '100%',
    width: '100vw',
    backgroundColor: 'white',
    paddingTop: 30
  },
  link: {
    width: '100%',
  }
}

class Photos extends Component {
  state = {
    imageData: []
  }
  componentDidMount() {
    const feed = new Instafeed({
      get: 'user',
      userId: '286664193',
      accessToken: '286664193.1677ed0.d46b9c3d793745748af14e333fb0c25c',
      limit: 15,
      sortBy: 'most-recent',
      resolution: 'standard_resolution',
      success: (response) => {
        this.setState({ imageData: response.data })
      },
    });
    feed.run()
  }
  render() {
    console.log(this.state);
    const { classes } = this.props;
    return (
      <Fragment>
        <ParallaxDivider image={performancesImg} title="@brandonnelsonmusic" />
        <div className={classes.container}>
          <PhotoGrid imageData={this.state.imageData} />
          <div style={{ display: 'none' }} id="instafeed"></div>
        </div>
      </Fragment >
    )
  }
}

export default withStyles(styles)(Photos);