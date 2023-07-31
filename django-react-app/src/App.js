

import Section from './components/Section';


import { sections } from './components/sections';

import './App.css';

import { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { withStyles } from '@mui/styles';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';

const styles = (theme) => ({
  app: {
    margin: 0,
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  appBody: {
    backgroundColor: '#282c34',
    display: 'block',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    minHeight: '100%',
  },
  mainWrapper: {},
  sectionWrapper: {
    width: '100%',
    height: '100vh',
    textAlign: 'center',
    alignContent: 'center',
    textJustify: 'center',
    color: [
      '#add8e6cc',
      '#2c4b5f33',
      '#2b4360',
      '#244756',
    ]
  },
  navbar: {
    height: '12vh',
    backgroundColor: '#083451',
    borderBottom: '4px solid #f3f3f4',
  },
  navBtn: {
    border: '2px solid',
    color: 'white',
  },
  button: {
    position: 'absolute',
    right: '5%',
    bottom: '5%',
    backgroundColor:'rgba(16, 45, 64, 0.29)',
    borderRadius: '50%',
  },
  toTopBtn: {
    paddingLeft: "13%",
  }
})


function App(props) {
  const { classes } = props;
  const [visible, setVisible] = useState(false);
  
  const sectionColorAdjuster = (sectionIndex) => {
    switch (sectionIndex) {
      case 0:
        return '#add8e6cc';
      case 1:
        return '#2c4b5f33'
      case 2:
        return '#2b4360'
      case 3:
        return '#244756'
      default:
        return '#fff'
    }
  }
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled < 300) {
      setVisible(false);
    }
  }

  const handleClick = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible);

    return (
    <Grid className={classes.app} container direction="column">
      <Grid
        className={classes.navbar}
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        rowSpacing={{ xs: 1, sm: 1, md: 1 }}
        alignContent='center'
        justifyContent='center'
      >
        {sections.map((section, index) => 
          <Grid item md={2} xs={12} key={`${section.name}_gridWrapper`}>
            <Button
              onClick={() => handleClick(`#${section.name.toLowerCase()}`)}
              key={`${section.name}_btn`}
              className={classes.navBtn}
            >
              {section.name}
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid className={classes.appBody} container direction="column">
        {sections.map((section, index) =>
          <Grid
            className={classes.sectionWrapper}
            style={{
              height: !index ? '88vh' : '100vh',
              backgroundColor: sectionColorAdjuster(index),
            }}
            id={section.name.toLowerCase()}
            key={`section-${section.name}`}
          >
            <Section section={section} />
          </Grid>
        )}
      </Grid>
      <Button
        onClick={scrollToTop}
        variant="contained"
        className={classes.button}
        style={{
          position: "sticky",
          display: visible ? "block" : 'none',
          justify: "center",
          left: "90%",
          backgroundColor: "rgb(16, 45, 64, 0.5)",
          borderRadius: "15%",
          height: "15%",
          width: "5%",
        }}
      >
        <ArrowCircleUpRoundedIcon
          onClick={scrollToTop}
          style={{paddingLeft: '18%', display: visible ? "block" : 'none'}}
          variant="outlined"
        />
      </Button>
    </Grid>
  );
}

export default withStyles(styles)(App);
