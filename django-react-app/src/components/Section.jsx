import React from 'react'

export const Section = (props) => {
  const { section } = props;
  
    return (
        <>
            <h2>{section.name}</h2>
            <div className='sectionContent'>{section.data}</div>
        </>
  )
}
