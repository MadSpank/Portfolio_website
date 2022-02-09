import React from 'react';
import { Element, scroller } from 'react-scroll';

import { Grid, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Avatar from '../static/avatar.jpg';

import WelcomeSection from '../components/WelcomeSection'

import {
	PAGE_ANCHORS,
	NAVIGATION_BUTTONS,
	PAGE_MENU_HEIGHT,
	MIN_SCROLL_PIXELS_COUNT_TO_SHOW_SCROLL_BUTTON,
	SCROLLER_DEFAULT_OFFSET,
	SCROLLER_CONFIG,
} from './constants'

const styles = theme => ({
	mainWrapper: {
		height: '100vh',
		width: '100vw',
		backgroundColor: '#C6D2ED',
		alignItems: 'space-between'
	},
	leftWrapper: {
		position: 'relative',
		width: '50vw',
		alignItems: 'center',
	},
	rightWrapper: {
		position: 'relative',
		width: '50vw',
		backgroundColor: 'rgba(255, 125, 0)'
	},
	itemWrapper: {
		height: '100vh',
		position: 'relative',
		textAlign: 'center',
		justifyContent: 'center',
	},
	contactsWrapper: {
		position: 'relative',
		height: '100vh',
		alingItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
	},
	buttonContainer: {
		position: 'absolute',
		width: 200,
		height: 100,
		top: '50vh',
		left: '50vh',
	}
});


const MainPage = (props) => {
	const { classes } = props;
	return (
		<Grid container className={classes.mainWrapper} direction="column">
			<Grid container className={classes.leftWrapper}>
				<Grid item xs={12} className={classes.itemWrapper}>
					<Typography>
						Welcome
					</Typography>
				</Grid>
				<Grid item xs={12} className={classes.itemWrapper}>
					<Typography>
						Experience
					</Typography>
				</Grid>
				<Grid item xs={12} className={classes.itemWrapper}>
					<Typography>
						About
					</Typography>
				</Grid>
				<Grid item xs={12} className={classes.itemWrapper}>
					<Typography>
						Contacts
					</Typography>
				</Grid>
			</Grid>
			<Grid container className={classes.buttonContainer} direction="row">
				<Grid item xs={12} className={classes.btnUp}>
					<Button>
						Up
					</Button>
				</Grid>
				<Grid item xs={12} className={classes.btnDown}>
					<Button>
						Down
					</Button>
				</Grid>
			</Grid>
			<Grid container className={classes.rightWrapper}>
				<Grid item xs={12} className={classes.contactsWrapper}>
					<Typography>
						my contancts
					</Typography>
				</Grid>
				<Grid item xs={12} className={classes.itemWrapper}>
					<Grid item>
						<Typography>
							cool guy
						</Typography>
					</Grid>
				</Grid>
				<Grid item xs={12} className={classes.itemWrapper}>
					<Typography>
						experience description
					</Typography>
				</Grid>
				<Grid item xs={12} className={classes.itemWrapper}>
					<WelcomeSection />
				</Grid>
			</Grid>
		</Grid>
	)
};

export default withStyles(styles)(MainPage);