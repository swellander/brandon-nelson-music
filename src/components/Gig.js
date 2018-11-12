import React, { Fragment } from "react"
import { withStyles, Paper, Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'gatsby';
import moment from 'moment'

const styles = {
  btn: {
    float: 'right'
  },
  dateSquareContainer: {
    marginRight: 30
  },
  dateSquare: {
    height: 80,
    width: 80,
    backgroundColor: '#1f1f1f',
    borderRadius: 4,
    color: 'white',
    margin: 0,
  },
  bodyContainer: {
    paddingBottom: 70
  },
  btn: {
    marginTop: 20
  }
}

const Gig = ({ classes, gig }) => {
  const formattedDate = moment(gig.date).format("MMM D")
  const time = moment(gig.date).format("h:mma")
  return (
    <Grid xs={12} container wrap="wrap">
      <Grid item xs={1} justify="flex-end" className={classes.dateSquareContainer}>
        <Paper className={classes.dateSquare}>
          <Grid justify="center" alignItems="center" container style={{ height: '100%' }}>
            <Typography variant="subheading" style={{ color: "white", textAlign: 'center' }}>
              {formattedDate}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={8} className={classes.bodyContainer}>
        <Typography variant="display1">
          {gig.title}
        </Typography>
        <Typography>
          {gig.venue}
        </Typography>
        <Typography>
          {time}
        </Typography>
        <Button
          to={gig.path}
          component={Link}
          className={classes.btn}
          variant="contained"
        >More Detail</Button>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Gig);