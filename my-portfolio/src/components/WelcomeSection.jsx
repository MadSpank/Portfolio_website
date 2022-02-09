import React from 'react';
import { Grid, Typography, Button} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
    textWrapper: {
        border: '1px solid black',
        borderRadius: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        top: '30vh',
        height: 300,
        width: 600,
    },
});

function WelcomeSection(props) {
    const { classes } = props;
    return (
        <Grid item className={classes.textWrapper}>
            <Typography>Welcome to my portfolio website</Typography>
        </Grid>
    );
};

export default withStyles(styles)(WelcomeSection);