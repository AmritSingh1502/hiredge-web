import React from 'react'
import './SDMNav.css'

function SDMNav() {
  return (
    <div className='container-nav'>
      <img src={require('../sdmcet-logo.png')} className='image logo'/>
      <div className='title'>
        <h2 className='heading'>SDM College of Engineering And Technology - Placement Cell</h2>
      </div>
      <img src={require('../hiredge.png')} className='image'/>
    </div>
  )
}

export default SDMNav
