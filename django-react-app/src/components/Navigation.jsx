import React from 'react'

import { Button, Grid } from '@mui/material';
import { withStyles } from '@mui/styles';

const styles = theme => ({
    navbar: {
        backgroundColor: '#083451',
        borderBottom: '4px solid #f3f3f4',
    },
    navBtn: {
        border: '2px solid white',
        color: 'white',
    },
})

const Navigation = (props) => {
    const { sections, classes, handleClick } = props;

  return (
    <Grid
        className={classes.navbar}
        container
        columnSpacing={{ xs: 1, sm: 3, md: 4 }}
        rowSpacing={{ xs: 1, sm: 1, md: 1 }}
        alignItems='center'
        justifyContent='center'
        style={{ height: '13vh' }}
    >
        {sections.map((section, index) => 
            <Button
                variant='outlined'
                onClick={() => handleClick(`#${section.name.toLowerCase()}`)}
                key={`${section.name}_btn`}
                className={classes.navBtn}
            >
                {section.name}
            </Button>
        )}
    </Grid>
    
  )
}

export default withStyles(styles)(Navigation);