import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Avatar from '../static/avatar.jpg';

import Header from './Header'

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
});

const MainPage = (props) => {
	const { classes } = props;
	return (
		<Grid container className={classes.mainWrapper} align="center">
			<Grid className={classes.title}>
				<Header />
			</Grid>
			<Grid container className={classes.header} direction="row" alignItems="space-between">
				<Grid item xs={6} className={classes.headerText}>
					<Typography>HEADER</Typography>
				</Grid>
				<Grid item xs={6} className={classes.headerImage}>
					<img src={Avatar} alt="avatar" className={classes.avatar} />
				</Grid>
			</Grid>
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