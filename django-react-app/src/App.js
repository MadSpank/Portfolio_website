

import { Section } from './components/Section';


import { sections } from './components/sections';

import './App.css';

import { useState } from 'react';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { Button } from '@mui/material';


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
      top:0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible);

    return (
    <div className="App">
      <div className='navbar'>
        <nav>
          {sections.map(section => 
            <Button
              onClick={() => handleClick(`#${section.name.toLowerCase()}`)}
              key={section.name}
              style={{
                border: '1px solid',
                color: 'white',
                marginRight: '2%',
              }}
            >
                {section.name}
            </Button>
          )}
        </nav>
      </div>
      <div className="App-body">
        {sections.map(section =>
          <div className='sectionWrapper' id={section.name.toLowerCase()} key={`section-${section.name}`}>
            <Section section={section} />
          </div>
        )}
      </div>
      <Button
        onClick={scrollToTop}
        variant="contained"
        className='Button'
        style={{
          position: "sticky",
          display: visible ? "block" : 'none',
          left: "85%",
          backgroundColor: "rgb(16, 45, 64, 0.5)",
          borderRadius: "15%",
          height: "15%",
          width: "5%",
        }}
      >
        <ArrowCircleUpRoundedIcon onClick={scrollToTop} style={{display: visible ? "block" : 'none'}} variant="outlined"/>
      </Button>
    </div>
  );
}

export default App;
