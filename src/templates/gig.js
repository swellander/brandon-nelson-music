import React, { Component } from "react"
import { graphql } from "gatsby"
import Header from '../components/Header';
// import Map from '../components/Map';
import { withStyles, Grid, Typography, Divider } from '@material-ui/core';
import moment from "moment"
// import Geocode from 'react-geocode'

const styles = {
  container: {
    marginTop: 50
  },
  map: {
    height: 200,
    marginTop: 38
  }
}

class GigDetail extends Component {
  // state = {
  //   center: {}
  // }
  // componentDidMount() {
  //   Geocode.setApiKey(process.env.GEO_KEY)
  //   Geocode.fromAddress(this.props.data.markdownRemark.frontmatter.address).then(
  //     response => {
  //       const center = response.results[0].geometry.location;
  //       this.setState({ center });
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }
  render() {
    const { markdownRemark } = this.props.data // data.markdownRemark holds our post data
    const { frontmatter } = markdownRemark
    const { description, venue, title, date } = frontmatter
    const { classes } = this.props;

    return (
      <div className="blog-post-container">
        <Header />
        <Grid className={classes.container} container justify="center">
          <Grid item xs={9} container justify="space-between">
            <Grid item xs={12} lg={5}>
              <Typography variant="h4">
                {title}
              </Typography>
              <Divider />
              <Typography variant="subheading" style={{ marginTop: 10 }}>
                {moment(date).format('dddd, MMMM Do, YYYY')}
              </Typography>
              <Typography variant="subtitle2">
                {venue}
              </Typography>
              <Typography variant="caption">
                {moment(date).format('h:mm a')}
              </Typography>
              <Typography style={{ marginTop: 10 }}>
                {description}
              </Typography>
            </Grid>

            <Grid className={classes.map} item xs={12} lg={6}>
              {/* <Map test="test" center={this.state.center} /> */}
              <h3>Map</h3>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path } }) {
        frontmatter {
      date
      path
      title
      venue
      address
      description
      link
    }
  }
}
`

export default withStyles(styles)(GigDetail)