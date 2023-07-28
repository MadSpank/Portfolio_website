

import { Section } from './components/Section';


import { sections } from './components/sections';

import './App.css';

import { useState } from 'react';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { Button, Grid } from '@mui/material';


function App() {
  const [visible, setVisible] = useState(false);
    
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
      console.log(visible);
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
    <Grid className="App" container direction="column">
      <Grid
        className='navbar'
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        rowSpacing={{ xs: 1, sm: 1, md: 1 }}
        alignContent='center'
        justifyContent='center'
      >
        {sections.map((section, index) => 
          <Grid item md={2} xs={12}>
            <Button
              onClick={() => handleClick(`#${section.name.toLowerCase()}`)}
              key={section.name}
              style={{
                border: '2px solid',
                color: 'white',
              }}
            >
              {section.name}
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid className="App-body" direction="column">
        {sections.map(section =>
          <Grid className='sectionWrapper' id={section.name.toLowerCase()} key={`section-${section.name}`}>
            <Section section={section} />
          </Grid>
        )}
      </Grid>
      <Button
        onClick={scrollToTop}
        variant="contained"
        className='Button'
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
          style={{
            display: visible ? "block" : 'none',
            paddingLeft: "13%",
          }}
          variant="outlined"
        />
      </Button>
    </Grid>
  );
}

export default App;
