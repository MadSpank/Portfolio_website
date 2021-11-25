import React from 'react';
import { Grid, Typography, Button} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Logo from '../static/logo.jpg'
import { PAGE_ANCHORS } from '../containers/constants';

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
    const { classes, navigationButtons, onNavigateButtonClick } = props;
    return (
        <Grid container item lg={8}>
            <Grid container alignItems="center" justifyContent="space-around">
                {navigationButtons.map(button => (
                    <Button
                    key={button.label}
                    className={classes.button}
                    onClick={() => { onNavigateButtonClick(button.targetName); }}
                    >
                    {button.label}
                    </Button>
                ))}
                <img src={Logo} alt="logo" className={classes.logo} onClick={onNavigateButtonClick(PAGE_ANCHORS.TOP_OF_PAGE)}/>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Header);