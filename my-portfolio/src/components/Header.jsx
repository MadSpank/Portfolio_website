import React from 'react';
import { Grid, Typography, Button} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Logo from '../static/logo.jpg'

const styles = theme => ({
    button: {

    },
    logo: {
        height: 100,
        weight: 100,
        borderRadius: 30,
    },
});

function Header(props) {
    const { classes } = props;
    return (
        <Grid container alignItems="space-between">
            <Grid item xs={2} className={classes.button}>
                <Button>ABOUT</Button>
            </Grid>
            <Grid item xs={2} className={classes.button}>
                <Button>WORK</Button>
            </Grid>
            <Grid item xs={2} className={classes.button}>
                <img src={Logo} alt="logo" className={classes.logo}/>
            </Grid>
            <Grid item xs={2} className={classes.button}>
                <Button>HOBBY</Button>
            </Grid>
            <Grid item xs={2} className={classes.button}>
                <Button>CONTACT</Button>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Header);