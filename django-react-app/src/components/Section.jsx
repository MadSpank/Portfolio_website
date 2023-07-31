import React from 'react'
import { withStyles } from '@mui/styles';

import { Grid } from '@mui/material';

const styles = (theme) => ({
  mainWrapper: {},
  sectionContent: {
  position: 'relative',
  textAlign: 'center',
  top: 'auto',
  left: 'auto',
  },
  imgWrapper: {
    height: 'auto',
    paddingTop: "15px"
  },
  img: {
    position: 'relative',
    display: "block",
    borderRadius: '8px',
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "60%",
    maxHeight: "70%",
    height: "auto",
  }
})

const Section = (props) => {
  const { section, classes } = props;

    return (
        <Grid container justifyContent='center' className={classes.mainWrapper}>
            <h2>{section.name}</h2>
            <Grid container justifyContent='center' className={classes.sectionContent}>
              {section.data}
            </Grid>
            {section.pictures && section.pictures.map((picture, index) =>
              <Grid item className={classes.imgWrapper} alignItems='center' key={`img_${index}`}>
                <img src={picture} alt='someImage' className={classes.img}/>
              </Grid>
            )}
        </Grid>
  )
}

export default withStyles(styles)(Section);