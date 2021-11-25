import React from 'react';
import { Element, scroller } from 'react-scroll';

import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Avatar from '../static/avatar.jpg';

import Header from '../components/Header'

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
	},
	title: {
		width: '100%',
		backgroundColor: '#C6D2ED',
		position: 'flex-end',
	},
	header: {
		width: '100%',
		backgroundColor: '#C6D2ED',
		position: 'flex-end',
	},
	headerText: {

	},
	headerImage: {
	},
	avatar: {
		height: 300,
		width: 300,
		borderRadius: '50%'
	},
	mainContent: {
		height: '15vh',
		width: '100%',
		backgroundColor: '#C6D2ED',
		position: 'flex-end',
	},
	footer: {
		height: '15vh',
		width: '100%',
		backgroundColor: '#739AD9',
	},
	infoPageScrollWrapper: {
		width: "100%",
	},
});

const onNavigate = (pageName, offset = SCROLLER_DEFAULT_OFFSET) => {
	scroller.scrollTo(pageName, {
		...SCROLLER_CONFIG,
		offset,
	  });
};

const MainPage = (props) => {
	const { classes } = props;
	return (
		<Grid name="TopOfPage" container className={classes.mainWrapper} align="center">
			<Grid className={classes.title}>
				<Header 
					navigationButtons={NAVIGATION_BUTTONS}
					onNavigateButtonClick={onNavigate}
				/>
			</Grid>
			<Element name={PAGE_ANCHORS.ABOUT} className={classes.infoPageScrollWrapper}>
				<Grid item xs={6} className={classes.headerText}>
					<Typography>HEADER</Typography>
				</Grid>
				<Grid item xs={6} className={classes.headerImage}>
					<img src={Avatar} alt="avatar" className={classes.avatar} />
				</Grid>
			</Element>
			<Grid className={classes.mainContent}>
				<Typography>
					MAIN CONTENT
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.footer}>
				<Typography>FOOTER</Typography>
			</Grid>
		</Grid>
	)
};

export default withStyles(styles)(MainPage);