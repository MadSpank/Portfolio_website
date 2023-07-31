import Section from "./components/Section";
import Navigation from "./components/Navigation";

import { sections } from "./components/sections";

import "./App.css";

import { useState } from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";

const styles = (theme) => ({
  app: {
    margin: 0,
    position: "relative",
    height: "100%",
    width: "100%",
    overflow: "auto",
  },
  appBody: {
    backgroundColor: "#282c34",
    display: "block",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  mainWrapper: {},
  sectionWrapper: {
    width: "100%",
    height: "100vh",
    textAlign: "center",
    alignContent: "center",
    textJustify: "center",
    color: ["#add8e6cc", "#2c4b5f33", "#2b4360", "#244756"],
  },
  button: {
    position: "absolute",
    right: "5%",
    bottom: "5%",
    backgroundColor: "rgba(16, 45, 64, 0.29)",
    borderRadius: "50%",
  },
  toTopBtn: {
    paddingLeft: "13%",
  },
});

function App(props) {
  const { classes } = props;
  const [visible, setVisible] = useState(false);

  const sectionColorAdjuster = (sectionIndex) => {
    switch (sectionIndex) {
      case 0:
        return "#add8e6cc";
      case 1:
        return "#2c4b5f33";
      case 2:
        return "#2b4360";
      case 3:
        return "#244756";
      default:
        return "#fff";
    }
  };
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled < 300) {
      setVisible(false);
    }
  };

  const handleClick = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Grid className={classes.app} container direction="column">
      <Navigation sections={sections} handleClick={handleClick} />
      <Grid className={classes.appBody} container direction="column">
        {sections.map((section, index) => (
          <Grid
            className={classes.sectionWrapper}
            style={{
              height: !index ? "88vh" : "100vh",
              backgroundColor: sectionColorAdjuster(index),
            }}
            id={section.name.toLowerCase()}
            key={`section-${section.name}`}
          >
            <Section section={section} />
          </Grid>
        ))}
      </Grid>
      <Grid style={{ position: "absolute", bottom: "2%", right: "5%" }}>
        <ArrowCircleUpRoundedIcon
          onClick={scrollToTop}
          variant="outlined"
          fontSize="large"
          style={{
            display: visible ? "block" : "none",
            position: "fixed",
            right: "5%",
            bottom: "5%",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(App);
