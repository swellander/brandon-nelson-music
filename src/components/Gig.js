import React, { Fragment } from "react"
import { withStyles, Paper, Grid, Typography, Button } from '@material-ui/core';
import moment from 'moment'

const styles = {
  btn: {
    float: 'right'
  },
  dateSquareContainer: {
    height: '100%',
  },
  dateSquare: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
    borderRadius: 4,
    color: 'white',
    margin: 0
  }

}

const Gig = ({ classes, gig }) => {
  const formattedDate = moment(gig.date).format("MMM D")
  console.log(formattedDate)
  return (
    <Grid xs={12} container wrap="wrap">
      <Grid item xs={2} justify="flex-end">
        <Paper className={classes.dateSquare}>
          <Grid justify="center" alignItems="center" container className={classes.dateSquareContainer}>
            <Typography variant="subheading" style={{ color: "white", textAlign: 'center' }}>
              {formattedDate}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="display3">
          {gig.title}
        </Typography>
        <Typography>
          {gig.date}
        </Typography>
        <Typography>
          {gig.address}
        </Typography>
        <Button variant="contained">More Detail</Button>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Gig);