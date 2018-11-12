import React, { Fragment } from "react"
import Gig from './Gig'
import { withStyles, Grid, } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Link } from 'gatsby'
import ParallaxDivider from "./ParallaxDivider";
import performancesImg from './smile.jpg';

const styles = {
  container: {
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 30
  },
  link: {
    width: '100%',
  }
}

const Giglist = ({ classes, edges }) => {
  return (
    <Fragment>
      <ParallaxDivider image={performancesImg} title="Performances" />
      <div className={classes.container}>
        < Grid container justify="center" >
          <Grid item lg={9} xs={11} justify="center" container>
            {edges.map((edge, i) => {
              const { frontmatter } = edge.node;
              return (
                <Fragment>
                  <Gig key={frontmatter.id} gig={frontmatter} />
                  <Divider />
                </Fragment>
              )
            })}
          </Grid>
        </Grid>
      </div>
    </Fragment >
  )
}

export default withStyles(styles)(Giglist);