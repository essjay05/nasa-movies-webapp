import React from 'react'

import './Card.scss'

const Card = () => {
  return (
    <div className='card'>
      <img
        src=''
        alt='Movie Poster' 
        className='card-img-top' />
      <div className='card-body'>
        <h4 className='card-title'>Movie Title</h4>
        <p className='card-description'>Description goes here....</p>
        <button className='card-btn' href=''>Link to Movie Detail</button>
      </div>
    </div>
  )
}

export default Card