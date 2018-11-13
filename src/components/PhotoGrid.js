import React from 'react';
import { withStyles, Grid } from '@material-ui/core/';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Photo from './Photo';

import fake from './fakeImages';
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  inner: {
    margin: 'auto',
    padding: 100
  },
  gridList: {
    width: '100%',
    height: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
});

function PhotoGrid(props) {
  const { classes, imageData } = props;
  let images;
  if (imageData.length !== 0) {
    images = imageData.map(data => ({
      img: data.images.standard_resolution.url,
      cols: Math.ceil(Math.random() * 4),
      // featured: Math.ceil(Math.random() * 5) === 5,
      title: 'flower',
    }))
  } else {
    images = fake;
  }
  console.log(images)
  let col = 0;
  return (
    <div className={classes.root}>
      <Grid conainer justify="center" alignContent="center">
        <Grid className={classes.inner} item xs={11} lg={9}>
          {/* <div style={{ backgroundColor: 'green', height: 50, width: 50 }}></div> */}
          <GridList spacing={9} cellHeight={230} className={classes.gridList} cols={3}>
            {images.map((tile, i) => (
              //TODO: This is sloppy
              // <Photo key={tile.img} tile={tile} i={i} />
              <GridListTile key={tile.img} cols={(i) % 5 == 0 || i == 0 ? 2 : 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(PhotoGrid);


