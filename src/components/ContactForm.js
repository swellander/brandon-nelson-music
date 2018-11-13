import React, { Component } from "react"
import { ParallaxBanner } from 'react-scroll-parallax';
import { withStyles, Typography, Grid, TextField, FormControl, Button } from '@material-ui/core';

const styles = {
  container: {
    height: '80vh',
  },
  formContainer: {
    height: 500,
    border: '1px solid black',
    padding: 15,
    borderRadius: 5
  },
  border: {
    // border: '1px solid black',
    height: 500,
    padding: 20
  }
}

class ContactForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <form data-netlify="true">
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          <Grid item xs={10} lg={5} className={classes.border}>

            <FormControl margin="normal">

              <TextField
                label="Name"
                variant="outlined"
                fullWidth
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline={true}
                rows={6}
                rowsMax={10}
              />
            </FormControl>
            <FormControl margin="normal">
              <Button type="submit" variant="outlined">Send</Button>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    )
  }
}

export default withStyles(styles)(ContactForm);