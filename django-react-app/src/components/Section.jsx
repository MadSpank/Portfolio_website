import React from 'react'

export const Section = (props) => {
  const { section } = props;
  
    return (
        <>
            <h2>{section.name}</h2>
            <div className='sectionContent'>{section.data}</div>
            {section.pictures && section.pictures.map(picture =>
                <img src={picture} alt='someImage' style={{width: "100%", height: "100%"}} />    
            )}
        </>
  )
}
