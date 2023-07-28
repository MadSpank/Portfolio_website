import React from 'react'

import { Grid } from '@mui/material';

export const Section = (props) => {
  const { section } = props;
  
    return (
        <Grid container justifyContent='center'>
            <h2>{section.name}</h2>
            <Grid container md={8} justifyContent='center' className='sectionContent'>
              {section.data}
            </Grid>
            {section.pictures && section.pictures.map(picture =>
              <Grid item className='imgWrapper' style={{paddingTop: "15px"}} alignItems='center'>
                <img src={picture}
                  alt='someImage'
                  style={{
                    position: 'relative',
                    display: "block",
                    borderRadius: '8px',
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "90%",
                    height: "auto",
                  }} />
              </Grid>
            )}
        </Grid>
  )
}
