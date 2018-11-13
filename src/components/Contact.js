import React, { Fragment } from "react"
import { withStyles, Grid, Typography, } from '@material-ui/core';
import ParallaxDivider from "./ParallaxDivider";
import contactImg from './band.jpg';
import ContactForm from "./ContactForm";

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

const Contact = ({ classes, edges }) => {
  return (
    <Fragment>
      <ParallaxDivider image={contactImg} title="Get in Touch" />
      <div className={classes.container}>
        <ContactForm />
      </div>
    </Fragment >
  )
}

export default withStyles(styles)(Contact);